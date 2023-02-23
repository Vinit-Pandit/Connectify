import { useState } from 'react'
import Login from './Login'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Dashboard" element ={<Dashboard/>}/>

        <Route path='/' element={<Login/>}></Route>
      

        
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
