const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'..','view')));

const httpServer = http.createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on('connection', (socket) => {
    console.log(socket.id)
})

httpServer.listen(3000, () => console.log('RODANDO'));