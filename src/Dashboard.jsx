import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Chat_window from './Components/Chat_window'
import Chat_Options from './Components/Chat_Options'
import FriendStatus from './Components/FriendStatus'

const DIV =styled.div `
  width: 100%;
  height: 100vh;
  background: #334646;
  /* color: white; */
  display: flex;
  flex-direction: row;

  
`
export default function Dashboard(Props) {
  const socket = io("http://localhost:8000")
  const [Option ,setOption] =useState('Globel')
  const [Participents , setParticipents] =useState({Globel:[] , Broadcast:[] , Group:[] , Privite:[]})
  
  const msgObject =[];
  
 
  return (
    <DIV id='Dashboard'>
      <Chat_Options setOp={setOption} NameNsocket={Props.NameNsocket} Option={Option}/>
      <Chat_window Option={Option} NameNsocket={Props.NameNsocket} Participents={Participents}/>
      <FriendStatus  NameNsocket={Props.NameNsocket} Option={Option} setOp={setOption} Participents={Participents} setParticipents={setParticipents}/>
      

    </DIV>
    
  )
}
