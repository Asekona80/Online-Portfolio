import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${nav ? 'fixed inset-0 bg-white/90' : ''}`}>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99]'/>
        {nav && (
          <div className='flex flex-col justify-center items-center z-20'> 
            <img src={logo} alt="Logo" className="w-24 mb-8"/> 
            <a href='#Home' className='w-[75%] flex justify-center round-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={closeNav}>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a href='#About' className='w-[75%] flex justify-center round-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={closeNav}>
              <BsPerson size={20}/>
              <span className='pl-4'>About Me</span>
            </a>
            <a href='#Projects' className='w-[75%] flex justify-center round-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={closeNav}>
              <AiOutlineProject size={20}/>
              <span className='pl-4'>Projects</span>
            </a>
            <a href='#Contact' className='w-[75%] flex justify-center round-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={closeNav}>
              <AiOutlineMail size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
         
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center h-24 max-w-[120px] mx-auto px-4 text-black font-semibold sticky top-0 z-10">
      <img src={logo} alt='Logo' className='w-[95px] h-10 ml-5' />
  <div className="ml-auto">
    <a href='#Home' className='mr-6'>
      <span className='p-4'>Home</span>
    </a>
    <a href='#About' className='mr-6'>
      <span className='p-4'>About</span>
    </a>
    <a href='#Projects' className='mr-6'>
      <span className='p-4'>Projects</span>
    </a>
    <a href='#Contact' className='mr-6'>
      <span className='p-4'>Contact</span>
    </a>
  </div>
</div>
</div>
  );
};

export default Navbar;
