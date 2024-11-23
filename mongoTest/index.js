const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log("Connected successfully to the database!");
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);

const apiRouter = express.Router();
app.use('/api', apiRouter);

// Create new user
// curl -X POST http://localhost:3000/api/users/create -H 'Content-Type: application/json' -d '{"username":"exampleUser"}'
apiRouter.post('/users/create', async (req, res) => {
  const username = req.body.username;

  if (!username) {
    res.status(400).send({ msg: 'Username is required' });
    return;
  }

  try {
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      res.status(409).send({ msg: 'User already exists' });
      return;
    }

    const newUser = { id: uuid.v4(), username };
    await usersCollection.insertOne(newUser);
    console.log('User created:', newUser);
    res.status(201).send({ msg: 'User created successfully', username });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ msg: 'Error creating user' });
  }
});

// List all users
// curl http://localhost:3000/api/users
apiRouter.get('/users', async (_req, res) => {
  try {
    const allUsers = await usersCollection.find({}).toArray();
    const usernames = allUsers.map(user => user.username);
    console.log('Users in database:', usernames);
    res.send({ users: usernames });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send({ msg: 'Error fetching users' });
  }
});

// Delete a user by username
// curl -X DELETE http://localhost:3000/api/users/delete -H 'Content-Type: application/json' -d '{"username":"exampleUser"}'
apiRouter.delete('/users/delete', async (req, res) => {
  const username = req.body.username;

  if (!username) {
    res.status(400).send({ msg: 'Username is required' });
    return;
  }

  try {
    const result = await usersCollection.deleteOne({ username });
    if (result.deletedCount === 0) {
      res.status(404).send({ msg: 'User not found' });
      return;
    }

    console.log('User deleted:', username);
    res.status(200).send({ msg: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ msg: 'Error deleting user' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});