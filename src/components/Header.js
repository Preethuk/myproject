import React from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import '../pages/allpages/Home.css'
export default function Header() {
  const navigate=useNavigate();
  return (
  <div className='NavLink'>
       
    <NavLink className='item' to=''> Home</NavLink>
    <NavLink className='item' to='Aboutus'> Aboutus </NavLink>
    <NavLink className='item' to='Contact'>Contact </NavLink>
    <button onClick={()=>navigate(-1)}>Back</button>
    <button onClick={()=>navigate(+1)}>  next</button>
    
  </div>
  )
}