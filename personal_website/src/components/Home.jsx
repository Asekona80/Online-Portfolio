import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiTailwindcss, SiMysql, SiFirebase } from "react-icons/si";
import hero from '../assets/hero.png';


const Home = () => {
  return (
    <div className='text-black'>
      <div className='max-w-full mt-20 md:mt-10 h-auto max-auto justify-between items-center px-4 flex flex-col md:flex-row mx-10'>
        <div className='order-2 md:order-1'>
          <p className='font-italic italic text-xl p-1'>HI THERE</p>
          <h1 className='font-bold text-2xl md:text-4xl sm:text-3xl md:py-6'>I'M ASEKONA XANYWA</h1>

          <div className='font-bold text-2xl md:text-3xl sm:text-2xl md:py-6'>
            <span className="inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight">
                <li > A POSITIVE</li>
                <li>PASSIONATE </li>
                <li>JUNIOR SOFTWARE DEVELOPER</li>
              </ul>
            </span>
          </div>
          <div className='flex mt-10 '>
            <AiOutlineGithub size={25} className='mx-2' />
            <AiFillLinkedin size={25} className='mx-2' />
          </div>
          <div className='flex mt-10'>
  <p className='font-medium mt-5 flex px-2'>TECH STACK:</p>
  <div className='flex mt-5 animate-icon-slide'>
    <FaPython size={25} className='mx-1' />
    <FaJava size={25} className='mx-1' />
    <FaReact size={25} className='mx-1' />
    <SiTailwindcss size={25} className='mx-1' />
    <FaHtml5 size={25} className='mx-1' />
    <FaCss3 size={25} className='mx-1' />
    <SiMysql size={25} className='mx-1' />
    <SiFirebase size={25} className='mx-1' />
  </div>
</div>  
        </div>
        <div className='order-1 md:order-2'>
          <img src={hero} alt='Hero Image' className='h-64 md:h-auto md:w-full object-cover mb' />
        </div>
      </div>
    </div>
  )
}

export default Home;
