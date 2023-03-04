const express = require("express")
var app = express();
var server = app.listen(8000);
var io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
});

const userSocketMap ={}
const connectedClients = new Map();

io.on('connection' , (socket)=>{
    socket.on('new-user-join' , (name)=>{
        console.log("new_connection ")
        connectedClients.set(socket.id , name)

        io.emit('Connected_clients' , Array.from(connectedClients.values()))
        userSocketMap[socket.id] = socket;
        socket.broadcast.emit('user-join' ,name)

    })

    socket.on('disconnect' , ()=>{
        connectedClients.delete(socket.id)
        io.emit('Connected_clients' , Array.from(connectedClients.values()))
    })

    socket.on('send' , (message)=>{
        console.log("send is call")
        socket.broadcast.emit('recive' ,message)
    })
    
})
