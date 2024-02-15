import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div className='w-full bg-[#f9f7fa] py-16 px-4 h-screen'>
      <h1 className='text-3xl font-bold mb-8 px-4 text-center'>PROJECT</h1>
      <Slider {...settings} className="w-full mx-auto">
        <div className="mx-auto max-w-full transform transition-transform duration-500 hover:scale-105">
          <img src={Image1} alt="Image1" className="mx-auto max-w-full rounded-md" />
        </div>
        <div className="mx-auto max-w-full transform transition-transform duration-500 hover:scale-105">
          <img src={Image2} alt="Image2" className="mx-auto max-w-full rounded-md" />
        </div>
        <div className="mx-auto max-w-full transform transition-transform duration-500 hover:scale-105">
          <img src={Image3} alt="Image3" className="mx-auto max-w-full rounded-md" />
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
