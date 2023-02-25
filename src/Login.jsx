import React from 'react'
import styled from "styled-components"
import TypeWriterEffect from 'typewriter-effect'
import { useState ,useEffect} from 'react'


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
      height: 40px;
      display: block;
      border: none;
      text-align: center;
      width: 250px;
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
      
    }
    

    
`
export default function Login() {
 
  function handleInit(typewriter){
    console.log(typewriter)
    typewriter.typeString('Chat With Your Buddies, ')
    typewriter.typeString('Enter your username ')
    typewriter.deleteChars(1)
    typewriter.start()
    
    
   

  }

  

 

 

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
        <input type="text" className='UserName'  />
        <a href="Dashboard" className='LetsGoBtn'>Lets Go</a>
      </div>

    </DIV>
  );
}