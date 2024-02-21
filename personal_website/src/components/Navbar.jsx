import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the threshold as needed for desktop width
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleResize(); // Check initial screen width
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav); // Toggle the nav state when menu icon is clicked
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeNav();
    }
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className={`md:flex justify-between items-center mx-auto px-4 py-4 text-black font-semibold transition-all duration-500 ease-in-out ${isDesktop && 'sticky top-0 z-50'} ${isSticky && 'bg-gradient-to-b from-indigo-200 to-[#f0fae5] shadow-md h-10 rounded-b-full'}`}>
      <div className="hidden md:block">
        <img src={logo} alt='Logo' className='w-[95px] h-10 ml-4' />
      </div>
      <div className="md:hidden flex justify-end mr-4">
        <AiOutlineMenu onClick={handleNav} className="text-4xl cursor-pointer p-2" /> 
      </div>
      <div className={`md:hidden ${nav ? 'block fixed inset-0 bg-[#f0fae5] round-full shadow-lg z-50' : 'hidden'}`}>
        <div className='flex flex-col justify-center items-center'>
          <img src={logo} alt="Logo" className="w-24 mr-8" />
          <button onClick={() => scrollToSection('home')} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-900'>
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </button>
          <button onClick={() => scrollToSection('about')} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-900'>
            <BsPerson size={20} />
            <span className='pl-4'>About Me</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-900'>
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-900'>
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <button onClick={() => scrollToSection('home')} className='mr-6 hover:text-indigo-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Home</span>
        </button>
        <button onClick={() => scrollToSection('about')} className='mr-6 hover:text-indigo-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>About</span>
        </button>
        <button onClick={() => scrollToSection('projects')} className='mr-6 hover:text-indigo-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Projects</span>
        </button>
        <button onClick={() => scrollToSection('contact')} className='mr-6 hover:text-indigo-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
