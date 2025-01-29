const express = require("express");
const { reset } = require("nodemon");
const cors = require('cors');
const path = require("path")
var app = express();
const port = 8000;
console.log(port)
var server = app.listen(port)
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

// console.log("js file is running this is the server " + io)

//--------------------------------deployment--------------------------//

// app.use(express.static(path.join(__dirname ,"../dist")  ))
// app.use(express.static(path.join(__dirname ,"../vite-project/dist/assets/index-33c86c42.js")  ))

// app.get("*", (req , res)=>{
    // console.log("File is serving ")
    // res.sendFile(path.join(__dirname ,"../dist/index.html"))
    // res.sendFile(path.join(__dirname ,"../vite-project/dist/assets/index-33c86c42.js"))
// })

//--------------------------------deployment--------------------------//
app.get("/testing" , (req , res)=>{
    
    res.end()
})

const userSocketMap ={}
const connectedClients = new Map();


io.on('connection' , (socket)=>{
    let Username ;
    
    socket.on('new-user-join' , (name)=>{
        console.log("new_connection ")
        connectedClients.set(name , socket.id)
        Username = name;
        
        io.emit('Connected_clients' , Array.from(connectedClients.keys()))
        userSocketMap[socket.id] = socket;
        // socket.broadcast.emit('user-join' ,name)
        io.emit('user-join' ,name)
        
    })


    socket.on('disconnect' , ()=>{
        connectedClients.delete(Username)
        
        
        socket.broadcast.emit('user-disconnected', Username)
        io.emit('Connected_clients' , Array.from(connectedClients.keys()))
    })
    
    socket.on('send' , (data)=>{
        console.log("send is call")
        console.log(socket.id)
        if(data.type == "Globel")
        {
            socket.broadcast.emit('recive' ,data)
            
        }
        else{
            console.log(data.to)
            data.to.forEach(element => {
                io.to(connectedClients.get(element)).emit('recive' , data)
                
            });
            
            
        }
    })
    
})



app.options('/SignUp', cors())
app.use(express.json());

app.post('/SignUp' , cors() ,(req , res)=>{
    console.log("recive the request")
    const data = req.body;
   
    res.json({UserName : data.UserName  , password : data.Password , authorize:true})
    res.end()
})
