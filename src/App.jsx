import { useRef, useState } from 'react'
import Login from './Login'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'


function App() {
  const [NameValue , setNameValue] = useState("")
  
  function GettingName(enterdname) {
    console.log("function is called")
    setNameValue(enterdname)
    
    console.log(NameValue)
  }
   

  return (
    <BrowserRouter>
      <Routes>
       
      <Route exact path="/Dashboard" element ={<Dashboard NameValue={NameValue}/>}/>
        
      
        
      <Route path='/' element={<Login setNameValue = {GettingName} NameValue={NameValue}/>}></Route>
        
      

        
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
