const express = require('express');
const http = require('http'); // For HTTP and WebSocket integration
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const PeerProxy = require('./peerProxy'); // Import WebSocket logic
const config = require('./dbConfig.json');

const app = express();
const server = http.createServer(app); // Create HTTP server
const port = 4000;

// Middleware for parsing JSON
app.use(express.json());

// Serve static files from 'public'
app.use(express.static('public'));

// -------------------------------- Database Connection --------------------------------
let db;
let usersCollection;

async function connectToDB() {
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url, {
    tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false,
  });

  try {
    await client.connect();
    console.log('Connected successfully to the database!');
    db = client.db('yourDatabaseName');
    usersCollection = db.collection('users');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit on failure
  }
}

connectToDB().catch(console.error);

// -------------------------------- API Routes --------------------------------
const apiRouter = express.Router();
app.use('/api', apiRouter);

const saltRounds = 10;

// Create new user (Signup)
apiRouter.post('/users/create', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ msg: 'Username and password are required' });
  }

  try {
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      return res.status(409).send({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = { id: uuid.v4(), username, password: hashedPassword };
    await usersCollection.insertOne(newUser);
    res.status(201).send({ msg: 'User created successfully', username });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ msg: 'Error creating user', error });
  }
});

// Login user
apiRouter.post('/users/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ msg: 'Username and password are required' });
  }

  try {
    const user = await usersCollection.findOne({ username });
    if (!user) {
      return res.status(404).send({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ msg: 'Invalid password' });
    }

    res.status(200).send({ msg: 'Login successful', username });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ msg: 'Error during login', error });
  }
});

// Delete a user
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

    res.status(200).send({ msg: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ msg: 'Error deleting user', error });
  }
});

// List all users
apiRouter.get('/users', async (_req, res) => {
  try {
    const allUsers = await usersCollection.find({}).toArray();
    const usernames = allUsers.map((user) => user.username);
    res.send({ users: usernames });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send({ msg: 'Error fetching users' });
  }
});

// -------------------------------- WebSocket Integration --------------------------------
new PeerProxy(server); // Attach WebSocket logic to the HTTP server

// -------------------------------- Start the Server --------------------------------
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
