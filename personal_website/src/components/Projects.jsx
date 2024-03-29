import React, { useState } from 'react';
import { AiOutlineGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Projects = () => {
  const slide = [
    {
      url: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/Asekona80/the-Convector',
      demo: '#'
    },
    {
      url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/Asekona80/Kuyasa-Health-services',
      demo: 'https://keen-tapioca-29c1f9.netlify.app/'
    },
    {
      url: 'https://images.unsplash.com/photo-1577583113753-ca7e95d1bdc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/Asekona80/Game',
      demo: 'https://asegame-86928a.netlify.app/'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slide.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slide.length) % slide.length);
  };

  const carouselHeight = '50vh'; 
  const aspectRatio = 16 / 9;

  return (
    <section id="projects" className='max-w-[1000px] min-h-screen w-full m-auto py-8 px-4 flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold mb-4">PROJECTS</h1>
      <div className="relative" style={{ height: carouselHeight, width: `calc(${carouselHeight} * ${aspectRatio})` }}>
        <div
          style={{ backgroundImage: `url(${slide[currentSlide].url})`, paddingBottom: `${(1 / aspectRatio) * 100}%` }}
          className='absolute inset-0 w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        <div className="absolute bottom-4 w-full flex justify-between items-center">
          <button
            onClick={prevSlide}
            className='text-white px-3 py-1 '
          >
            <BsChevronLeft size={20} className='bg-gray-800 rounded-full mb-[200px]'/> 
          </button>
          <div className="flex space-x-4 mt-[120px]">
            <a href={slide[currentSlide].github} className="text-gray-600 hover:text-black">
              <AiOutlineGithub size={30} />
            </a>
            <a href={slide[currentSlide].demo} className="text-gray-600 hover:text-gray-900 px-5">
              <BsBoxArrowInUpRight size={30} />
            </a>
          </div>
          <button
            onClick={nextSlide}
            className='text-white px-3 py-1 rounded-full mb-[200px]'
          >
            <BsChevronRight size={20} className='bg-gray-800 rounded-full'/> 
          </button>
        </div>
        <div className="absolute bottom-4 mr-4 mt-4 w-full flex justify-center items-center lg:hidden">
          <button onClick={prevSlide} className="text-white mx-2 p-2 rounded-full bg-gray-800">
            <BsChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="text-white  mx-2 p-2 rounded-full bg-gray-800">
            <BsChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
                           