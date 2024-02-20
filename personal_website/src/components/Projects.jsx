import React, { useState } from 'react';
import { AiOutlineGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; // Import arrow icons

const Projects = () => {
  const slide = [
    {
      url: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com',
      demo: '#'
    },
    {
      url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com',
      demo: '#'
    },
    {
      url: 'https://images.unsplash.com/photo-1577583113753-ca7e95d1bdc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com',
      demo: '#'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slide.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slide.length) % slide.length);
  };

  const carouselHeight = 400;
  const aspectRatio = 16 / 9;

  return (
    <div className='max-w-[1000px] bg-grey-200 w-full m-auto py-8 px-4 flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold mb-4">PROJECTS</h1>
      <div className="relative" style={{ height: `${carouselHeight}px`, width: `${carouselHeight * aspectRatio}px` }}>
        <div
          style={{ backgroundImage: `url(${slide[currentSlide].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        <div className="absolute bottom-4 w-full flex justify-between items-center">
          <button
            onClick={prevSlide}
            className=' text-white px-3 py-1 '
          >
            <BsChevronLeft size={20} className='mb-[150px]  bg-gray-800 rounded-full'/> {/* Arrow icon for previous */}
          </button>
          <div className="flex space-x-4">
            <a href={slide[currentSlide].github} className="text-gray-600 hover:text-black">
              <AiOutlineGithub size={30} className='mt-20'/>
            </a>
            <a href={slide[currentSlide].demo} className="text-gray-600 hover:text-gray-900 px-5">
              <BsBoxArrowInUpRight size={30} className='mt-20' />
            </a>
          </div>
          <button
            onClick={nextSlide}
            className='  text-white px-3 py-1 rounded-full mb-4'
          >
            <BsChevronRight size={20}  className='mb-[150px]  bg-gray-800 rounded-full'/> {/* Arrow icon for next */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
