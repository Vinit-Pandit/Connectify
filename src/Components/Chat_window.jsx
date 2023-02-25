import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Chat_Box = styled.div`
    
    text-align: center;
    /* overflow: hidden; */
    position: relative;
    width: 70%;
    overflow: hidden;
    background: #7ccadb;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0px 0px 15px #000000;
    border: 10px solid #2b5d60;
    /* display: flex; */
    /* flex-direction: column; */
    
    

    

    .Window_head{
      width: 100%;
      height: 80px;
     
      position: relative;
      background: #3272767d;
      /* display: flex; */
      /* text-align: center; */
      
      /* margin: auto; */
      /* margin-top:20px; */

    }
    .Chat_type{
      font-size: 1.5rem;
      font-weight: 900;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      letter-spacing: 0.03rem;
    }
    .Headtext{
      position: relative;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0px 50px;    
      cursor: default;
    }
    .Participants{
      display: flex;
      gap: 10px;
      list-style: none;
      margin: 5px 0px;
      font-weight: normal;
      opacity: 0.5;
      font-size: 1rem;
      font-family: sans-serif;
      letter-spacing: 0.015rem;

    }
    .message{
      position: absolute;
      width: 100%;
      height:60px;
      bottom: 0;
      
     
    }
    .TypeBoard{
      width: 94%;
      text-align: left;
      padding: 0 30px;
      height: 60px;
      outline: none;
      border: none;
      border-radius: 7px;
      font-size: 1.1rem;
      font-family: Arial, Helvetica, sans-serif;
      letter-spacing: 0.02rem;
    }
    .Send{
      
      position: absolute;
      background: none;
      border: none;
      font-size: 1.5rem;
      right:0;
      top: 0;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      margin: 0 20px;
      color: #444242;
    }

    .Send:hover{
      color: black;
      
    }
  


    
    
    

  
`


export default function Chat_window() {

  const [InpValue , setValue] = useState(" ")
  console.log(InpValue)
  const participants = ["participants1" , "participants2","participants3","participants4"]

  const Handle_Click =(e)=>{
    
    setValue("")
    document.getElementsByClassName('TypeBoard')[0].value =""
  }
  return (
    <Chat_Box>
        <div className="Window_head">
          <div className="Headtext">
            <span className='Chat_type'>Globel</span>
            <ul className='Participants'> 
              <li>{participants[0]}</li>
              <li>{participants[1]}</li>
              <li>{participants[2]}</li>
              <li>{participants[3]}</li>
              
            </ul>

          </div>
        </div>
        <div className="message"  value={InpValue} onChange={(e)=>{setValue(e.target.value)}}>

          <input type="text"  className='TypeBoard'  placeholder='Type Your Message' />
          <button className='Send' onClick={Handle_Click}>
          <i class="fa-solid fa-paper-plane"></i>
          </button>
         
        </div>
         

    </Chat_Box>
    
  )
}
