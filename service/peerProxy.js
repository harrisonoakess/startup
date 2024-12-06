const { WebSocketServer } = require('ws');
const uuid = require('uuid');

class PeerProxy {
  constructor(server) {
    this.wss = new WebSocketServer({ server });
    this.connections = []; // Track connections

    // Handle new connections
    this.wss.on('connection', (ws) => {
      const connection = { id: uuid.v4(), alive: true, ws };
      this.connections.push(connection);
      console.log(`Client connected: ${connection.id}`);

      // Handle incoming messages
      ws.on('message', (data) => {
        console.log(`Received from ${connection.id}:`, data);

        // Forward message to all other clients
        this.connections.forEach((c) => {
          if (c.id !== connection.id && c.ws.readyState === WebSocketServer.OPEN) {
            c.ws.send(data);
          }
        });
      });

      // Mark connection as alive on pong
      ws.on('pong', () => {
        connection.alive = true;
      });

      // Remove closed connections
      ws.on('close', () => {
        console.log(`Client disconnected: ${connection.id}`);
        this.connections = this.connections.filter((c) => c.id !== connection.id);
      });

      ws.on('error', (error) => {
        console.error(`Error from ${connection.id}:`, error);
      });
    });

    // Periodically check connection health
    setInterval(() => {
      this.connections.forEach((c) => {
        if (!c.alive) {
          console.log(`Terminating inactive client: ${c.id}`);
          c.ws.terminate();
        } else {
          c.alive = false;
          c.ws.ping();
        }
      });
    }, 10000); // Ping every 10 seconds
  }
}

module.exports = PeerProxy;