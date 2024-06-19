import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Chat_window from './Components/Chat_window'
import Chat_Options from './Components/Chat_Options'
import FriendStatus from './Components/FriendStatus'
import { useLocation, useNavigate } from 'react-router-dom'

const DIV =styled.div `
  width: 100%;
  height: 100vh;
  background: #334646;
  /* color: white; */
  display: flex;
  flex-direction: row;

  
`
export default function Dashboard(Props) {

  const location = useLocation();
  const {Name} = location.state || {}
  const navigate = useNavigate ()
  
  
  useEffect(()=>{
    if (Name == null) {
      navigate("/" )
    }
  })
  console.log("under the dashborad")
  const [Option ,setOption] =useState('Globel')
  //igonre the broadcast
  const [Participents , setParticipents] =useState({Globel:[] , Broadcast:[] , Group:[] , Privite:[]})
  console.log(Participents)
  
  
    return (
      <DIV id='Dashboard'>
        <Chat_Options setOp={setOption}  Option={Option} Name = {{Name:Name }}/>
        <Chat_window Option={Option} Participents={Participents} setParticipents={setParticipents}  Name = {{Name:Name }}/>
        <FriendStatus Option={Option} setOp={setOption} Participents={Participents} setParticipents={setParticipents}  Name = {{Name:Name }}/>
        
  
      </DIV>
      
    )
  
  
  
  
  
    
    
 
}
