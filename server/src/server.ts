import express from 'express';
const app = express();

const server = app.listen(3333, () => console.log("It's work!"));

import io from 'socket.io';

const socket = io(server);

socket.on('connection', (socket) => {
    socket.on('chat', data => console.log(data));
});

