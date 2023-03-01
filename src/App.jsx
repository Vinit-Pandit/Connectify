import { useRef, useState } from 'react'
import Login from './Login'
import { BrowserRouter, Routes,Route , useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'



function App() {
  const [SocketNname , setSocketNname] = useState({})
  
  
  function GettingNameSocket(enterdname) {
    console.log("function is called")
    
    const socket = io("http://localhost:8000")
    socket.emit('new-user-join' , enterdname)
    setSocketNname({Name:`${enterdname}` , Socket :socket})
    console.log(SocketNname)
    
   
  }
   

  return (
    <BrowserRouter>
      <Routes>
       
      <Route exact path="/Dashboard" element ={<Dashboard NameNsocket={SocketNname}/>}/>
        
      
        
      <Route path='/' element={<Login setNameValue = {GettingNameSocket} />}></Route>
        
      

        
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
