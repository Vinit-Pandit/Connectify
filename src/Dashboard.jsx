import React from 'react'
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
export default function Dashboard() {

  const  FriendArr = [
    {name:"name1" , online:true},
    {name:"name2" , online:false},
    {name:"name3" , online:true},
    {name:"name4" , online:false},
    {name:"name5" , online:true},
    
  ]
  return (
    <DIV id='Dashboard'>
      <Chat_Options/>
      <Chat_window/>
      <FriendStatus arr={FriendArr}/>
      

    </DIV>
    
  )
}
