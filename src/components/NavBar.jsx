import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTelegram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Yeabsira_resume from "../assets/Yeabsira_Zelalem_CV_Resume.pdf"
export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = Yeabsira_resume;
    link.download = 'Yeabsira_resume'; 
    link.click(); 
  };
  return (
    <div className='font-roboto bg-customBlue text-white w-full'>
      <div className='flex justify-around '>
        <div className='font-bold lg:text-2xl text-lg mt-8 lg:mx-16'><h1>PORTFOLIO</h1></div>
         <div className='mt-8 lg:mx-16 mb-3 '>
            <button onClick={handleDownload}  className="bg-customBlue text-white border-2 border-customTeal rounded-full lg:py-2 py-1 lg:px-6 px-3 hover:bg-customBlue1 hover:text-customBlue transition duration-300">
             Download CV
            </button>
        </div>
      </div>
    
      <div className='justify-center text-center lg:text-4xl text-sm'>
          <h1 className='   lg:ml-[450px] ml-4 font-bold flex mt-8 '>I'm Yeabsira Zelalem a   <TypeAnimation className='text-customBlue1'
            sequence={[
              'Software Engineer',
              2000, 
              'Developer',
              2000,
              'Programmer',
              2000,
              'Poet',
              2000
            ]}
            wrapper="div"
            speed={50}
            style={{ fontSize: '1em', paddingLeft:'5px' }}
            repeat={Infinity}
          />
          </h1>
          <div className="flex justify-center mt-12  p-4">
          <a href="https://t.me/y_a_b_u_Z" target="_blank" rel="noopener noreferrer" className="mx-2 px-4 ">
            <FaTelegram size={32} className='text-customBlue1  hover:text-customTeal transition duration-300'/>
          </a>
          <a href="https://github.com/tsega7659" target="_blank" rel="noopener noreferrer" className="mx-2 px-4 ">
            <FaGithub size={32} className='text-customBlue1  hover:text-customTeal transition duration-300' />
          </a>
          <a href="https://www.linkedin.com/in/yeabsira-zelalem-8455052ab/" target="_blank" rel="noopener noreferrer" className="mx-2 px-4 ">
            <FaLinkedin size={32} className='text-customBlue1  hover:text-customTeal transition duration-300' />
          </a>
          <a href="mailto:yeabsirazelalem791@gmail.com" className="mx-2 px-4 ">
            <FaEnvelope size={32} className='text-customBlue1  hover:text-customTeal transition duration-300' />
          </a>
        </div>
        <hr class="border-t-4 border-customTeal w-64 mx-auto  mt-12" />
        </div>
      
    </div>
  )
}
