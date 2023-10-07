
import React, { useState } from 'react'
import {FaCanadianMapleLeaf} from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavbarLink from "./NavbarLink";
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar1() {
  const [open,setOpen] = useState(false);

  return (
    <nav className='bg-gray-200 fixed w-full'>
      <div className='flex items-center justify-around font-medium'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
          <FaCanadianMapleLeaf className='md:cursor-pointer h-9' size={30} color='#ff0000'/>
          <div className='flex justify-center items-center md:hidden' onClick={()=>setOpen(!open)}>
          {open ? (<CloseIcon/>):(<MenuIcon/>)}
          </div>
         
        </div>
        <ul className='md:flex hidden uppercase items-center gap-8 '>
          <li>
            <Link to="/home" className='py-7 px-3 inline-block hover:text-green-400 active:text-red-400 focus:text-[#FF0000]'>Home</Link>
          </li>
          <NavbarLink/>
        </ul>
        <div className='md:block hidden'>
        <Button variant="outlined">LOGIN</Button>
        </div>

        {/* // mobile view */}
        <ul className={`md:hidden fixed h-full w-full bg-gray-300 bottom-0 py-0 pl-4 duration-500 top-[76px] ${open ? "left-0":"left-[-100%]"}`}>
          <li>
            <Link to="/home" className='py-7 px-3 inline-block'>Home</Link>
          </li>
          <NavbarLink/>
          <div className='py-5 '>
        <Button variant="outlined">LOGIN</Button>
        </div>
        </ul>
       
        {/* // mobile view */}
      </div>
    </nav>
  )
}

export default NavBar1