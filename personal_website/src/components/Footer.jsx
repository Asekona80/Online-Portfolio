import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center  lg:justify-start mb-4 lg:mb-0 "> {/* Center the content */}
          <img src={Logo} alt='Logo' className='w-[95px] h-10 mr-4' />
          <p className="text-black flex items-center justify-center">© 2024 Asekona xanywa</p>
        </div>

        <div className="flex items-center">
          <a href="/" className="text-black mr-4"><FaArrowAltCircleUp className="text-black mr-1" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
