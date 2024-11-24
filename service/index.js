const express = require('express');
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const config = require('./dbConfig.json');

const app = express();
const port = 4000; // Default port for development

app.use(express.json());

let db;
let usersCollection;

// Database connection setup
async function connectToDB() {
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
  try {
    await client.connect();
    console.log('Connected successfully to the database!');
    db = client.db('yourDatabaseName');
    usersCollection = db.collection('users');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}

// Call the database connection function
connectToDB().catch(console.error);

// ------------------------------------------API routes---------------------------------
const apiRouter = express.Router();
app.use('/api', apiRouter);
app.use(express.static('public'));
const saltRounds = 10;

// Create new user (Signup)
// curl -X POST http://localhost:3000/api/users/create -H 'Content-Type: application/json' -d '{"username":"exampleUser", "password":"yourPassword"}'
apiRouter.post('/users/create', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.error('Missing username or password');
    return res.status(400).send({ msg: 'Username and password are required' });
  }

  try {
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      console.error('User already exists:', username);
      return res.status(409).send({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = { id: uuid.v4(), username, password: hashedPassword };
    await usersCollection.insertOne(newUser);
    console.log('User created successfully:', newUser);
    res.status(201).send({ msg: 'User created successfully', username });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ msg: 'Error creating user', error });
  }
});

// Login user
// curl -X POST http://localhost:3000/api/users/login -H 'Content-Type: application/json' -d '{"username":"exampleUser", "password":"yourPassword"}'
apiRouter.post('/users/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.error('Missing username or password');
    return res.status(400).send({ msg: 'Username and password are required' });
  }

  try {
    const user = await usersCollection.findOne({ username });
    if (!user) {
      console.error('User not found:', username);
      return res.status(404).send({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error('Invalid password for user:', username);
      return res.status(401).send({ msg: 'Invalid password' });
    }

    console.log('User logged in successfully:', username);
    res.status(200).send({ msg: 'Login successful', username });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ msg: 'Error during login', error });
  }
});

// Delete a user by username
// curl -X DELETE http://localhost:3000/api/users/delete -H 'Content-Type: application/json' -d '{"username":"exampleUser"}'
apiRouter.delete('/users/delete', async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).send({ msg: 'Username is required' });
  }

  try {
    const result = await usersCollection.deleteOne({ username });
    if (result.deletedCount === 0) {
      return res.status(404).send({ msg: 'User not found' });
    }

    console.log('User deleted:', username);
    res.status(200).send({ msg: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ msg: 'Error deleting user' });
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

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});