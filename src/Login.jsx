import React, { useRef } from 'react'
import styled from "styled-components"
import TypeWriterEffect from 'typewriter-effect'
import { useState, useEffect, Ref } from 'react'
import { Link, json } from 'react-router-dom'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'
import { redirect } from 'react-router-dom'


const DIV = styled.div`
    text-align: center;
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
      font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
      font-weight: 700;
      -webkit-transition-timing-function: ease-in-out;
      transition-timing-function: ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      
    }
    .UserName{
      height: 45px;
      display: block;
      border: none;
      text-align: center;
      width: 400px;
      font-size: 1.5rem;
      font-weight: 600;
      border-radius: 5px;
      outline: none;
      box-sizing: border-box;
      /* overflow: hidden; */
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }


    

    .LetsGoBtn{
      font-size: 1.8rem;
      font-weight: 750;
      text-decoration: none;
      background: none;
      border: none;
      outline: none;
      color: #54bddd;
      transition-duration: 0.2s;
      margin: 0 20px;
      
      /* transform: translateX(35px); */
      cursor: pointer;
    }
    
    .LetsGoBtn:hover{
      color: #4499b5;
      
    }
    

    
`
export default function Login(props) {
  localStorage.clear()
  const InputRefUserName = useRef()
  const InputRefPassword = useRef()
  const navigate = useNavigate();
  function handleInit(typewriter) {
    typewriter.typeString('Chat With Your Buddies ,')
    typewriter.typeString('Enter your Credintials ')
    typewriter.deleteChars(1)
    typewriter.start()
  }

  //********************************Function to send the credintials to the server*********


  async function sendCredentials(UserName, password) {
    console.log(password)
    let headerList = {
      "Content-Type": "application/json"
    }
    let BodyList = {
      "UserName": UserName,
      "Password": password
    }



    let response = await fetch("http://localhost:8000/SignUp", {
      method: "POST",
      body: JSON.stringify(BodyList),
      headers: headerList
    }).then((res) => res.json()).then((data) => data)

    return response



  }




  /**************************** */




  const HandleRedirect = (e) => {


    if (InputRefUserName.current.value.trim() === '') {
      console.log("i am running")
      InputRefUserName.current.style.border = "2px solid red"
    }

    else if (InputRefPassword.current.value.trim() === '') {
      InputRefPassword.current.style.border = "2px solid red"
    }

    else {
      console.log("else is runnning")
      sendCredentials(InputRefUserName.current.value, InputRefPassword.current.value).then(
        (res) => {
          if (res.authorize) {
            props.setNameValue(`${InputRefUserName.current.value}`)
            navigate("/Dashboard")
          }
          else {
            console.log("authorization is fales")
          }
        }
      )
      


    }


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

        <input type="text" placeholder='UserName' className='UserName' ref={InputRefUserName} onKeyDown={(e) => { e.key == "Enter" ? HandleRedirect() : null }} />

        <input type="text" placeholder='Password' className='UserName' ref={InputRefPassword}
          onKeyDown={(e) => { e.key == "Enter" ? HandleRedirect() : null }} />

        <div className='Btns'>
          <button className='LetsGoBtn' onClick={HandleRedirect}>Log In</button>
          <button className='LetsGoBtn'>Sign Up</button>

        </div>

      </div>

    </DIV>
  );
}