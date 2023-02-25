import React from 'react'
import styled from 'styled-components'

const FrSt = styled.div`
    width: 15%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 30px; */
    font-size: 1.2rem;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    span{
        margin: 10px;
        /* max-height:10px; */
    }
    .user{
        font-size: 1.5rem;
    }
    .circle{
        font-size: 0.6rem;
        top: -12px;
        position: relative;
        color: green;
    }
    
`

export default function FriendStatus(propes) {
  return (
    <FrSt>
        {/* <span><i class="fa-solid fa-circle circle"></i><i class="fa-solid fa-user user"></i>     {propes.arr[0]}</span>
        <span><i class="fa-solid fa-circle circle"></i><i class="fa-solid fa-user user"></i>     {propes.arr[0]}</span>
        <span><i class="fa-solid fa-circle circle"></i><i class="fa-solid fa-user user"></i>     {propes.arr[0]}</span>
        <span><i class="fa-solid fa-circle circle"></i><i class="fa-solid fa-user user"></i>     {propes.arr[0]}</span> */}

    {propes.arr.map(element => (
      <span key={element}>
        <i className="fa-solid fa-circle circle" style={{color:`${element.online?"#00ef00" : "#ff5200"}`}}></i>
        <i className="fa-solid fa-user user"></i>  {"  " /* just for spaces*/} 
        {element.name}
      </span>
    ))}
        
        
    </FrSt>
  )
}
