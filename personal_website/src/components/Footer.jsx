import React from 'react';
import { FaHome } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
          <p className="text-white">© 2024 Your Company Name</p>
        </div>
        <div className="flex items-center">
          <a href="/" className="text-white mr-4"><FaHome className="mr-1" /> Back to Home</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
