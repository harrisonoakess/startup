const express = require('express');
const uuid = require('uuid');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

let users = {"username":"test"};

const apiRouter = express.Router();
app.use('/api', apiRouter);

// creatre new user
// curl -X POST http://localhost:3000/api/users/create -H 'Content-Type: application/json' -d '{"username":"exampleUser"}'

apiRouter.post('/users/create', (req, res) => {
  const username = req.body.username;

  if (!username) {
    res.status(400).send({ msg: 'Username is required' });
    return;
  }

  if (users[username]) {
    res.status(409).send({ msg: 'User already exists' });
    return;
  }

  // Store user by username
  users[username] = { id: uuid.v4(), username };
  console.log('User created:', users[username]);
  res.status(201).send({ msg: 'User created successfully', username });
});

// List all users
// curl http://localhost:3000/api/users
apiRouter.get('/users', (_req, res) => {
  const usernames = Object.keys(users);
  console.log('Users in memory:', usernames);
  res.send({ users: usernames });
});

// Delete a user by username
// curl -X DELETE http://localhost:3000/api/users/delete -H 'Content-Type: application/json' -d '{"username":"exampleUser"}'
apiRouter.delete('/users/delete', (req, res) => {
  const username = req.body.username;

  if (!username || !users[username]) {
    res.status(404).send({ msg: 'User not found' });
    return;
  }

  delete users[username];
  console.log('User deleted:', username);  // Log the deleted user
  res.status(200).send({ msg: 'User deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});