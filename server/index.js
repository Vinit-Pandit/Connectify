const express = require("express")
var app = express();
var server = app.listen(8000);
var io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
});

const user ={}

io.on('connection' , (socket)=>{
    socket.on('new-user-join' , (name)=>{
        user[socket.id]= name;
        socket.broadcast.emit('user-join' ,name)

    })

    socket.on('send' , (message)=>{
        socket.broadcast.emit('recive' ,{message:message , name:user[socket.id]})
    })
})
