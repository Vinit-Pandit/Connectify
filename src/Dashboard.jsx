import React from 'react'
import styled from 'styled-components'
import Chat_window from './Components/Chat_window'
import Chat_Options from './Components/Chat_Options'


const DIV =styled.div `
  width: 100%;
  height: 100vh;
  background: #363838;
  /* color: white; */
  display: flex;
  flex-direction: row;

  
`
export default function Dashboard() {


  return (
    <DIV id='Dashboard'>
      <Chat_Options/>
      <Chat_window/>
      <div className='Friend_list'></div>
      

    </DIV>
    
  )
}
