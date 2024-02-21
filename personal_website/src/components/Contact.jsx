import React, { useState } from 'react';
import { FaFileDownload, FaDiscord, FaLinkedin } from 'react-icons/fa';
import ReCAPTCHA from  'react-google-recaptcha'



const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const FORM_ENDPOINT = 'https://public.herotofu.com/v1/f3690a30-cef9-11ee-a1c1-7755cb567bfd';
  const{ recap, setrecap}= useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.name === 'email') {
        if (!emailRegex.test(input.value)) {
          alert('Please enter a valid email address');
          input.focus();
          return;
        }
      } else {
        if (input.name && input.value.trim() === '') {
          alert(`${input.name} cannot be empty`);
          input.focus();
          return;
        }
      }
      data[input.name] = input.value;
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
    <section id="contact" className='w-full h-screen py-16 px-4 min- ' style={{ background: 'linear-gradient(to bottom, #f0fae5, #FFFFFF)' }}>
      <h1 className='text-3xl font-bold mb-8 px-4 text-center'>CONTACT</h1>
      <div className='max-w-4xl mx-auto flex flex-col lg:flex-row'>
        <div className='bg-[#FFFFFF] h-[500px] w-[500px] lg:w-2/4 rounded-lg p-8 mb-16 lg:mr-8 shadow-md border border-[#ab9dfd] float-right' style={{ marginTop: '20px' }}>
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
                name='name' 
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
                name='email' 
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
                name='message' 
                placeholder='Send message'
                rows='4'
              ></textarea>
            </div>
            <ReCAPTCHA
            sitekey='6Lc2u3opAAAAAHVNno1FY5QCfwBFMbnSx90fX6mb'
           onChange={(val) => setrecap(val)}
            
            />
            <div className='flex justify-center lg:justify-start'>
              <button disabled={!recap}
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
          <FaFileDownload size={30} className="text-2xl mb-2 cursor-pointer mt-6 " />
          <div className="flex items-center mb-2">
            <a href="asekona_31187" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={30} className="text-2xl  cursor-pointer discord-icon  lg:mt-0" />
            </a>
          </div>
          <a href="https://www.linkedin.com/in/asekona-xanywa-99b655200/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-2xl cursor-pointer linkedin-icon  lg:mt-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
