import React, { useState } from 'react';
import { FaFileDownload, FaDiscord, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const FORM_ENDPOINT = 'https://public.herotofu.com/v1/f3690a30-cef9-11ee-a1c1-7755cb567bfd'; // Replace 'YOUR_FORM_ENDPOINT' with your actual endpoint URL

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <section id="contact" className='w-full py-16 px-4 min-h-screen' style={{ background: 'linear-gradient(to bottom, #f0fae5, #FFFFFF)' }}>
      <h1 className='text-3xl font-bold mb-8 px-4 text-center'>CONTACT</h1>
      <div className='max-w-4xl mx-auto flex flex-col lg:flex-row'>
        <div className='bg-[#FFFFFF] w-full lg:w-2/4 rounded-lg p-8 mb-16 lg:mr-8 shadow-md border border-[#ab9dfd] float-right'>
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                name='name' // Add name attribute
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
                name='email' // Add name attribute
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
                name='message' // Add name attribute
                placeholder='Send message'
                rows='4'
              ></textarea>
            </div>
            <div className='flex justify-center lg:justify-start'>
              <button
                className='bg-[#BCB1FF] text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline shadow-md mr-4'
                type='submit' 
              >
                Submit
              </button>
              <input type="text" name="_gotcha" tabindex="-1" autoComplete="off" />
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
    </section>
  );
};

export default Contact;
