const express = require('express');
const http = require('http');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const PeerProxy = require('./peerProxy');
const config = require('./dbConfig.json');

const app = express();
const server = http.createServer(app); // Create HTTP server
const port = 4000;

// Middleware for parsing JSON
app.use(express.json());

// Serve static files from 'public'
app.use(express.static('public'));

// Database connection
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
    process.exit(1);
  }
}

connectToDB().catch(console.error);

// API routes
const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/users/create', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send({ msg: 'Username and password are required' });

  try {
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) return res.status(409).send({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    await usersCollection.insertOne({ id: uuid.v4(), username, password: hashedPassword });
    res.status(201).send({ msg: 'User created successfully', username });
  } catch (error) {
    res.status(500).send({ msg: 'Error creating user', error });
  }
});

apiRouter.post('/users/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send({ msg: 'Username and password are required' });

  try {
    const user = await usersCollection.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).send({ msg: 'Invalid credentials' });

    res.status(200).send({ msg: 'Login successful', username });
  } catch (error) {
    res.status(500).send({ msg: 'Error during login', error });
  }
});

// Create WebSocket server on a separate path (/ws)
const wsServer = new PeerProxy(server); // Attach WebSocket logic to the HTTP server

// Start the server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
