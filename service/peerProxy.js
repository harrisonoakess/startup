const WebSocket = require('ws');

class peerProxy {
    constructor(server) {
        this.wss = new WebSocket.Server({server});
        this.wss.on('connection', (ws) => {
            console.log('Client Connected');
            ws.on('message', (message) => {
                console.log('Recieved: ', message);

                // sends message to everyone
                this.wss.clients.forEach(client => {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(message);
                    }
                });
            });

            ws.on('close', () => {
                console.log('Client Disconnected');
            });
            ws.on('error', (error) => {
                console.error('WebSocket error:', error);
            });
        });
        //ping for connection
        setInterval(() => {
            this.wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.ping();
                }
            });
        }, 30000); // 30 seconds
    }
}
module.exports = PeerProxy;