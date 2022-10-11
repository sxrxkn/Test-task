const ws = new WebSocket('ws://localhost:3000');
ws.onopen = () => {
    ws.send(JSON.stringify({
        name: 'Sergei',
        surname: 'Sorokin'
    }))
};
