const WebSocket = require('ws');

class PeerProxy {
  constructor(server) {
    this.wss = new WebSocket.Server({ server });

    this.wss.on('connection', (ws) => {
      console.log('Client connected');

      // Handle incoming messages
      ws.on('message', (message) => {
        console.log('Received:', message);

        // Broadcast the message to all other clients
        this.wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      });

      // Handle connection close
      ws.on('close', () => {
        console.log('Client disconnected');
      });

      // Handle errors
      ws.on('error', (error) => {
        console.error('WebSocket error:', error);
      });
    });

    // Ping all clients every 30 seconds to keep connections alive
    setInterval(() => {
      this.wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.ping();
        }
      });
    }, 30000);
  }
}

module.exports = PeerProxy;
