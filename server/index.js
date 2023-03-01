const express = require("express")
var app = express();
var server = app.listen(8000);
var io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
});

const userSocketMap ={}

io.on('connection' , (socket)=>{
    socket.on('new-user-join' , (name)=>{
        console.log("new_connection ")
        userSocketMap[socket.id] = socket;
        socket.broadcast.emit('user-join' ,name)

    })

    socket.on('send' , (message)=>{
        console.log("send is call")
        userSocketMap[socket.id].broadcast.emit('recive' ,message)
    })
})
