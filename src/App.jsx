import { useEffect, useRef, useState } from 'react'
import Login from './Login'
import { BrowserRouter, Routes,Route , useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'



function App() {
  const [SocketNname , setSocketNname] = useState({})
  let TempSokcet ;
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>}></Route>
       {/* {
         (SocketNname.Socket)?
         <Route exact path="/Dashboard" element ={<Dashboard NameNsocket={SocketNname}/>}/>:
         GettingNameSocket(localStorage.getItem('UserName'))
         
         
       } */}

      <Route exact path="/Dashboard" element ={<Dashboard />}/>
        
      
        
        
      

        
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
