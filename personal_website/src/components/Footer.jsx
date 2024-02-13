import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex lg:justify-start mb-4 lg:mb-0 ">
          <img src={Logo} alt='Logo' className='w-[95px] h-10 ml-4' />
        </div>
        <div>
        <p className="text-black flex items-center justify-center">© 2024 Asekona xanywa</p>
        </div>

        <div className="flex items-center">
          <a href="/" className="text-black mr-4"><FaArrowAltCircleUp className="text-black mr-1 w-50 " /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
