import React from 'react';
import Slider from 'react-slick';
import { FaGithub } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project1 from '../assets/Project1.jpg';
import Project3 from '../assets/Project3.jpg';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='w-full bg-[#FBE4FF] py-16 px-4'>
      <h1 className='text-3xl font-bold mb-8 px-4 text-center'>PROJECT</h1>
      <Slider {...settings} className="flex justify-center">
        <div className="relative">
          <img src={Project1} alt="Project 1" className="mx-auto" />
          <FaGithub className="absolute bottom-0 left-0 mb-2 ml-2 text-white text-2xl cursor-pointer" />
        </div>
        <div className="relative">
          <img src={Project3} alt="Project 3" className="mx-auto" />
          <FaGithub className="absolute bottom-0 right-20 mb-2 ml-2 text-white text-2xl cursor-pointer" />
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
