import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

export default function Home() {
  const navigator=useNavigate();
  return (
    <div>
      home
      <NavLink className='item' to=' /Electronics'> Electronics</NavLink>
    <NavLink className='item' to=' /mobile'> mobile </NavLink>
    <NavLink className='item' to='/books'>books</NavLink> 
    <button onClick={()=>navigator(-1)}>navigate contact</button> 
    
       <div className='body'>
         <button> Navigate</button>
       </div>
       </div>
  )
}
