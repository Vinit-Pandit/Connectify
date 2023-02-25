import React from 'react'
import styled from 'styled-components'


const Chat_opt = styled.div`
    width: 15%;
    height: 100vh;
    text-align: center;
    .Opt_ul{
        height: 100vh;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        list-style: none;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 70px;
    }
    .options {
        width: 100%;
        height: 2rem;
        text-decoration: none;
        
        color: #9a9a9a;
        transition-duration: 0.5s;
        cursor: pointer;
        
    }
    .options:hover{
        color: white;
    }
    .selected{
        color: #ffffff;
        scale: 1.2;
        /* background-color: red; */

    }
    
    
    
    
    .icon{
        font-size: 1.5rem;
        color: #84b2c3;
        
    }
    
    

`

export default function Chat_Options() {
  return (
    <Chat_opt>
        <ul className='Opt_ul'>
            {/* <li>Globel</li>
            <li>Broadcast</li>
            <li>Group</li> */}
            <a href="#" className='options selected'>Globel <i class="fa-solid fa-globe icon "></i></a> 
            <a href="#" className='options '>Broadcast <i class="fa-solid fa-podcast icon"></i></a>
            <a href="#" className='options '>Group <i class="fa-sharp fa-solid fa-people-group icon"></i></a>
            <a href="#" className='options '>Privite <i class="fa-solid fa-user-group icon"></i></a>
        </ul>
    </Chat_opt>
  )
}
