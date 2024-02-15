import React, { useState } from 'react';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='w-full bg-[#f9f7fa] py-16 px-4'>
      <h1 className='text-3xl font-bold mb-8 px-4 text-center'>PROJECT</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flip-card" onClick={handleFlip}>
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-front">
              <img src={Image1} alt="Image1" className="mx-auto max-w-full rounded-md" />
            </div>
            <div className="flip-card-back">
              <p>Back content for Image 1</p>
            </div>
          </div>
        </div>
        <div className="flip-card" onClick={handleFlip}>
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-front">
              <img src={Image2} alt="Image2" className="mx-auto max-w-full rounded-md" />
            </div>
            <div className="flip-card-back">
              <p>Back content for Image 2</p>
            </div>
          </div>
        </div>
        <div className="flip-card" onClick={handleFlip}>
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-front">
              <img src={Image3} alt="Image3" className="mx-auto max-w-full rounded-md" />
            </div>
            <div className="flip-card-back">
              <p>Back content for Image 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
