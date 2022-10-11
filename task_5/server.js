const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000})

wss.on('connection', ws => {
    ws.on("message", message => {
        try {
            const data = JSON.parse(message);
            console.log(data.name, data.surname);
        } catch(e) {
            console.log(`Error:  ${e.message}`);
        }
    })
})