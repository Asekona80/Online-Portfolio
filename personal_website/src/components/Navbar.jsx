import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeNav();
    }
  };

  return (
    <div className={`md:flex justify-between items-center mx-auto px-4 text-black font-semibold transition-all duration-500 ease-in-out ${isSticky ? 'sticky top-0 bg-gradient-to-b from-indigo-200 to-[#f0fae5] shadow-md z-50 rounded-b-full' : 'absolute top-0 w-full'}`}>
      <div>
        <img src={logo} alt='Logo' className='w-[95px] h-10' />
      </div>
      <div className={`md:hidden ${nav ? 'block fixed inset-0 bg-[#f0fae5] round-full shadow-lg' : 'hidden'}`}>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99]' />
        {nav && (
          <div className='flex flex-col justify-center items-center z-20'>
            <img src={logo} alt="Logo" className="w-24 mr-8" />
            <button onClick={() => scrollToSection('Home')} className='w-[75%] flex justify-center round-full shadow-lg bg-grey-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-900'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </button>
            <button onClick={() => scrollToSection('About')} className='w-[75%] flex justify-center round-full shadow-lg bg-grey-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-900'>
              <BsPerson size={20} />
              <span className='pl-4'>About Me</span>
            </button>
            <button onClick={() => scrollToSection('Projects')} className='w-[75%] flex justify-center round-full shadow-lg bg-grey-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-900'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </button>
            <button onClick={() => scrollToSection('Contact')} className='w-[75%] flex justify-center round-full shadow-lg bg-grey-100 shadow-indig-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-900'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </button>
          </div>
        )}
      </div>
      <div className="hidden md:flex items-center">
        <button onClick={() => scrollToSection('Home')} className='mr-6 hover:text-indigo-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Home</span>
        </button>
        <button onClick={() => scrollToSection('About')} className='mr-6 hover:text-indigo-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>About</span>
        </button>
        <button onClick={() => scrollToSection('Projects')} className='mr-6 hover:text-indigo-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Projects</span>
        </button>
        <button onClick={() => scrollToSection('Contact')} className='mr-6 hover:text-indigo-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
