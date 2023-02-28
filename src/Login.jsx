import React, { useRef } from 'react'
import styled from "styled-components"
import TypeWriterEffect from 'typewriter-effect'
import { useState ,useEffect , Ref} from 'react'
import { Link } from 'react-router-dom'


const DIV =styled.div`
    
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg,#1b1f21,#8febff);
    .text{
      width: 50%;
      font-size: 3rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 700;
      transition-timing-function: ease-in-out;
      
    }
    .UserName{
      height: 50px;
      display: block;
      border: none;
      text-align: center;
      width: 270px;
      font-size: 1.5rem;
      font-weight: 600;
      border-radius: 5px;
      outline: none;
      box-sizing: border-box;
      /* overflow: hidden; */
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      
      margin-top: 20px;
      
      
      
      
    }
    .LetsGoBtn{
      font-size: 1.8rem;
      text-decoration: none;
      outline: none;
      color: #4499b5;
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;
      transform: translateX(35px);
      cursor: pointer;
      
      
    }
    

    
`
export default function Login(props) {
  
  const InputRef = useRef()
 
  function handleInit(typewriter){
    
    typewriter.typeString('Chat With Your Buddies, ')
    typewriter.typeString('Enter your username ')
    typewriter.deleteChars(1)
    typewriter.start()
    
    
    
    
  }
  const HandleRedirect =(e)=>{
   
    
    
    if (InputRef.current.value.trim() ==='') {
      console.log("i am running")
      e.preventDefault()
      
      InputRef.current.placeholder ="User name"
      InputRef.current.style.border = "2px solid red"
    } 
    else{
      props.setNameValue(`${InputRef.current.value}`)
      // window.location.pathname += "Dashboard"
      
    }
    
    
  }
  
  const HandleInputChange =(e)=>{
    // props.setNameValue(`${InputRef.current.value}`)
    
    
    
  }
  
  
  
  
  // useEffect(()=>{
    
  //   props.setNameValue(`${InputRef.current.value}`)
    
  // })

 

  return (
    <DIV>
      <div className='text'>
        <TypeWriterEffect
          options={{
            
            autoStart: true,
            loop: false,
            delay: 45,
            
          }}
          
          onInit={handleInit}
            
        
          
        />
        
        <input type="text" placeholder='' className='UserName'ref={InputRef} onChange={HandleInputChange}/>
        <Link   className='LetsGoBtn' to='Dashboard' onClick={HandleRedirect}>Lets Go</Link>
        
      </div>

    </DIV>
  );
}