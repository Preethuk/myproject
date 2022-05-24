import React from 'react'
import { NavLink,Route,Routes,Outlet} from 'react-router-dom'
import '../allpages/Home.css'
export default function Aboutus() {
  return (
    <div style={{padding:'10px'}}>
    <div className='NavLink' style={{backgroundColor:'green'}}>
         
         {/* <NavLink className={()=>(match ?"item active":"item")} to='' style={{color:'white'}}>Electronics</NavLink> */}
         <NavLink className='item' to='mobile' style={{color:'white'}}> Mobile</NavLink>
         <NavLink className='item' to='books' style={{color:'white'}}>Books </NavLink>
         
       </div>
       <div className='body'>
         <Outlet/>
       </div>
      </div>
  )
}