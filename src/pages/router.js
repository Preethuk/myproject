import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './allpages/home'
import Admin from './allpages/Admin'
import Aboutus from './allpages/Aboutus'
import Pagenotfound from '../pages/allpages/Pagenotfound'
import Header from '../components/Header'
export default function Router() {
  console.log(window.location);
  return (
    <BrowserRouter>
    <Routes>
       
            <Route path="/" element={<Home/>}></Route>
            <Route path="/admin"element={<Admin/>}></Route>
            <Route path="/aboutus"element={<Aboutus/>}></Route>
            <Route path="*" element={<Pagenotfound/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}
