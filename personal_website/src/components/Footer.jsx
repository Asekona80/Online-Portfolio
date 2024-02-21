import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import Logo from '../assets/logo.png';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex lg:justify-start mb-4 lg:mb-0">
          <img src={Logo} alt='Logo' className='w-[95px] h-10 ml-4' />
        </div>
        <div className="flex items-center justify-center lg:justify-center lg:flex-1"> {/* Added lg:flex-1 for responsiveness */}
          <p className="text-black text-center lg:text-left">© 2024 CopyRights: Asekona xanywa</p> {/* Added text-center class */}
        </div>
      </div>
      {isScrolled && (
        <div className="flex items-center justify-center fixed bottom-4 right-4">
          <button onClick={scrollToTop} className="text-black focus:outline-none">
            <FaArrowAltCircleUp size={30} className="text-black mr-1" />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
