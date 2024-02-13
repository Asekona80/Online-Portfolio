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
    slidesToScroll: 1
  };

  return (
    <div className='w-full bg-[#FBE4FF] py-16 px-4'>
      <h1 className='text-3xl font-bold mb-8 px-4 text-center'>PROJECT</h1>
      <Slider {...settings}>
        <div>
          <img src={Image1} alt="Image1" className="mx-auto max-w-full" />
        </div>
        <div>
          <img src={Image2} alt="Image2" className="mx-auto max-w-full" />
        </div>
        <div>
          <img src={Image3} alt="Image3" className="mx-auto max-w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
