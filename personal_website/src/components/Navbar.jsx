import { useState } from 'react'
import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'



const Navbar = () => {
  const [Nav, funcNav]=useState(true)

  const workNav=()=>{
    funcNav(!Nav)
  }

  return (
    
   <div className='flex justify-between items-center h-24 max-w[120px] mx-auto px-4 text-black font-semibold'> 
    <div className='w-full'>
  <img src={logo} alt='Logo' className='w-[95px] h-10' />
</div>
<ul className='hidden md:flex' onClick={workNav}>
  <Link to='/home' className='hover:text-violet-400 transition-colors duration-300'>
    <li className='p-4'>Home</li>
  </Link>
  <Link to='/about' className='hover:text-violet-400 transition-colors duration-300'>
    <li className='p-4'>AboutMe</li>
  </Link>
  <Link to='/projects' className='hover:text-violet-400 transition-colors duration-300'>
    <li className='p-4'>Projects</li>
  </Link>
  <Link to='/contact' className='hover:text-violet-400 transition-colors duration-300 '>
    <li className='p-4'>Contact</li>
  </Link>
</ul>
        <div onClick={workNav} className='block md:hidden'>
          {!Nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/>}
        </div>
        <div className={!Nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-violet-200 bg-[#ffffff] ease-in-out duration-500' :' fixed left-[-100%]'}>
        <div className='w-full'>
  <img src={logo} alt='Logo' className='w-[95px] h-10 ' />
         </div>

          <ul className=' uppercase p-3' >
          <Link to='Home'>
        <li className='p-4'>Home</li>
        </Link>
        <Link to='About'>
        <li className='p-4'>AboutMe</li>
        </Link >
        <Link to='Projects'>
        <li className='p-4'>Projects</li>
        </Link>
        <Link to='Contact'>
        <li className='p-4'>Contact</li>
        </Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar

