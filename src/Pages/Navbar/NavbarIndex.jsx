import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home'
import NavBar1 from './NavBar1'

function NavbarIndex() {
  return (
  <>
  <NavBar1/>
  
  <Routes>  
   <Route path="/home" element={<Home/>}/>
  </Routes>
  </>
    
   
  )
}

export default NavbarIndex