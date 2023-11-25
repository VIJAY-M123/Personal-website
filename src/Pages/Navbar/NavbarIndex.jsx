import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home'
import NavBar1 from './NavBar1'
import About from '../About'
import Image from '../Image'
import WorkExperience from '../Work Experience'

function NavbarIndex() {
  return (
  <>
  <NavBar1/>
  
  <Routes>
  <Route path="/" element={<Home/>}/> 
   <Route path="/home" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/image" element={<Image/>}/>
   <Route path="/experience" element={<WorkExperience/>}/>
  </Routes>
  </>
    
   
  )
}

export default NavbarIndex