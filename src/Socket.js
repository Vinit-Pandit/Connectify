import { io } from "socket.io-client";
let socket = null
function getSocket(UserName) {
    if (socket == null) {
        socket = io("http://localhost:8000")
        // const socket = io("https://chat-app-t22q.onrender.com")
        socket.emit('new-user-join', UserName)
    }
    return socket
}


export default getSocket