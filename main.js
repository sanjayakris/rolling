const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) =>{
    console.log('A user connected');
    socket.on('disconnect', function() {
        console.log('A user disconnected');
    })
})

server.listen(3000, () =>{
    console.log("Server successfully runned");
});