import React from 'react';
import { FaFileDownload, FaDiscord, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h1 className='text-3xl font-bold mb-8 px-4 text-center'>CONTACT</h1>
      <div className='max-w-4xl mx-auto flex flex-col lg:flex-row'>
        <div className='bg-white w-full lg:w-2/4 rounded-lg p-8 mb-8 lg:mr-8 shadow-md border border-[#BCB1FF]'>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='Enter name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Enter email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                className='appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='message'
                placeholder='Send message'
                rows='4'
              ></textarea>
            </div>
            <div className='flex justify-center lg:justify-start'>
              <button
                className='bg-[#BCB1FF] text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline shadow-md mr-4'
                type='button'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center items-start lg:items-end lg:w-1/4 mt-4 lg:mt-0">
          <FaFileDownload className="text-2xl mb-2 cursor-pointer" />
          <div className="flex items-center mb-2">
          <a href="asekona_31187" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="text-2xl  cursor-pointer" />
             </a>
          </div>
          <a href="https://www.linkedin.com/in/asekona-xanywa-99b655200/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
