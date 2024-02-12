import React from 'react'
import Slider from 'react-slick'




const Projects = () => {
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    }
  return (
    <div  className='w-full bg-[#FBE4FF] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-3xl font-bold mb-8 px-4 text-center'>PROJECT</h1>
        <slider {...settings}/>
        <div></div>
        </div>
    </div>
  )
}

export default Projects