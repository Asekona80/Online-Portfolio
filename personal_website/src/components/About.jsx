import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-3xl font-bold mb-8 px-4 text-center mt-8' id='About'>ABOUT ME</h1>
        <div className='grid gap-8 md:grid-cols-3'>
          <div className='bg-[#BCB1FF] rounded-lg shadow-xl p-6 animate-bounce transition-transform duration-500 ease-in-out hover:scale-105'>
            {/* Content for container 1 */}
            <h2 className='text-xl font-normal mb-4 text-center'>Get to Know Me</h2>
            <div className='bg-white p-4 rounded-md'>
              {/* Nested container inside container 1 */}
              <p>Meet Asekona Xanywa, a dynamic Junior Software Developer with a diploma in Application Development from Walter Sisulu University. Specializing in both software development and cybersecurity, my success in hackathons reflects practical experience, shaping me into a seasoned professional ready to contribute to the dynamic tech landscape.</p>
            </div>
          </div>
          <div className='bg-[#FFE2AB] rounded-lg shadow-xl p-6 animate-bounce transition-transform duration-500 ease-in-out hover:scale-105'>
            {/* container 2 */}
            <h2 className='text-xl font-normal mb-4 text-center'>Skills</h2>
            <div className='w-[300px] items-center justify-center'>
              {/* Skill 1 */}
              <div className='bg-white p-1 rounded-md mb-3'>
                <p className='text-center '>JAVA</p>
              </div>
              {/* Skill 2 */}
              <div className='bg-white p-1 rounded-md mb-3'>
                <p className='text-center '>REACT</p>
              </div>
              {/* Skill 3 */}
              <div className='bg-white p-1 rounded-md mb-3'>
                <p className='text-center '>TAILWIND CSS</p>
              </div>
              {/* Skill 4 */}
              <div className='bg-white p-1 rounded-md mb-3'>
                <p className='text-center'>PYTHON</p>
              </div>
              {/* Skill 5 */}
              <div className='bg-white p-1 rounded-md mb-3'>
                <p className='text-center'>HTML5</p>
              </div>
              {/* Skill 6 */}
              <div className='bg-white p-1 rounded-md mb-3'>
                <p className='text-center'>CSS3</p> 
              </div>
              {/* Skill 7 */}
              <div className='bg-white p-1 rounded-md mb-3 '>
                <p className='text-center'>MySQL</p>
              </div>
              {/* Skill 8 */}
              <div className='bg-white p-1 rounded-md mb-3'>
                <p className='text-center'>FIREBASE</p>
              </div>
            </div>
          </div>
                   <div className='bg-[#D4F9B7] rounded-lg shadow-xl p-6 relative overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 animate-bounce'>
            {/*  container 3 */}
            <h2 className='text-xl font-normal mb-4 text-center'>Experience</h2>
            <div className='bg-white p-4 rounded-md'>
              {/* container inside container 3 */}
              <p>CapaCiTi: 2023 July - 2024 January <br />
              <p className='px-6'> For 6 months, I worked on projects including: a Health service website, a Banking application, and a Game.</p>
              <p>Younglings 2024 Jan - present</p>
              <p className='px-6'>Currently in a 12 months program as a Junior software developer, I will be creating different real-life projects using various programming languages and frameworks</p> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
