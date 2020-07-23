import express from 'express';
const app = express();

const server = app.listen(3333, () => console.log("It's work!"));

import io from 'socket.io';


interface User {
    id: number;
    name: string;
    message: string;
}
const messages: User[] = [];

const ioServer = io(server);

ioServer.on('connection', (socket) => {
    ioServer.emit('chat_history', messages);
    
    console.log('Alguém se conectou no chat')
    socket.on('chat', data => {
        const id = socket.id
        messages.push({id, ...data});
        ioServer.emit('chat_update', messages)
    });
});

