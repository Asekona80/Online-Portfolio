import React, { useEffect, useState } from 'react';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiTailwindcss, SiMysql, SiFirebase } from "react-icons/si";
import hero from '../assets/hero.png';

const Home = () => {
  const [textLoaded, setTextLoaded] = useState([]);
  const [animationDelayed, setAnimationDelayed] = useState(true);

  useEffect(() => {
    const typingDelay = 200; // Delay between each character (in milliseconds)
    const text = ["A POSITIVE", "PASSIONATE", "JUNIOR SOFTWARE DEVELOPER"];
    let index = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < text[index].length) {
        charIndex++;
        setTextLoaded(prevState => [...prevState.slice(0, index), text[index].slice(0, charIndex)]);
      } else if (index < text.length - 1) {
        index++;
        charIndex = 0;
        setTextLoaded(prevState => [...prevState, ""]);
      } else {
        clearInterval(typingInterval);
        setTextLoaded(prevState => [...prevState, text[index]]);
        setTimeout(() => {
          setAnimationDelayed(true);
        }, 2000); // Delay animation for 2 seconds
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="text-black">
      <div className="max-w-full mt-20 md:mt-[100px] h-auto max-auto justify-between items-center px-4 flex flex-col md:flex-row mx-10">
        <div className="order-2 md:order-1 mt-10">
          <p className="font-italic italic text-xl p-1">HI THERE</p>
          <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl md:py-6 animate-text-slide">I'M ASEKONA XANYWA</h1>

          <div className="font-bold text-2xl md:text-3xl sm:text-2xl md:py-6">
            <span className={`inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden ${animationDelayed ? 'animate-text-slide' : ''}`}>
              <ul className="block animate-text-slide text-left leading-tight">
                <li>JUNIOR SOFTWARE DEVELOPER</li>
              </ul>
            </span>
          </div>
          <div className="flex mt-10 animate-icons">
            <AiOutlineGithub size={30} className="mx-2" />
            <AiFillLinkedin size={30} className="mx-2 linkedin-icon" />
          </div>

          <div className="flex mt-10">
            <p className="font-medium mt-5 px-2 text-xl md:text-2xl sm:text-xl text-center md:text-left md:flex md:items-center md:justify-start">TECH STACK:</p>
            <div className="flex mt-5 animate-icon-slide">
              <FaPython size={25} className="mx-2 floating-bounce python-icon" />
              <FaJava size={25} className="mx-2 floating-bounce" />
              <FaReact size={25} className="mx-2 floating-bounce react-icon" />
              <SiTailwindcss size={25} className="mx-2 floating-bounce  tailwind-icon" />
              <FaHtml5 size={25} className="mx-2 floating-bounce" />
              <FaCss3 size={25} className="mx-2 floating-bounce" />
              <SiMysql size={25} className="mx-2 floating-bounce" />
              <SiFirebase size={25} className="mx-2 floating-bounce firebase-icon" />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src={hero} alt="Hero Image" className="h-64 md:h-auto md:w-full object-cover mb-4 md:mb-0 float-right md:float-none mr-4 md:mr-0" />
        </div>
      </div>
    </section>
  );
}

export default Home;
