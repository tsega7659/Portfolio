import React from 'react'
import image from "../assets/me.png"
export const About = () => {
  return (
    <div className='lg:flex ml-8' id='about'>
  <div className='md:ml-4 mt-32  flex items-center w-full '>
    <img className="md:mx-32 max-md:mx-10 md:w-96 md:h-72 h-64 " src={image} alt="Girl" />
  </div>

  <div className='items-center text-center justify-center md:mt-32 mt-4 py-8'>
    <h1 className='text-4xl text-gray-600'>About me</h1>
    <p className='py-4  sm:mx-44 text-gray-500 flex sm:text-left  text-center'>I'm Yeabsira Zelalem, specializing in front-end development and programming.  My paramount focus revolves around ensuring client satisfaction and delivering high-quality solutions. With a diligent approach and commitment to excellence, I strive to develop innovative projects that meet both client expectations and industry standards.  I have developed a unique set of creative skills that allow me to approach programming challenges in innovative ways. My experiences in data structures and algorithm have taught me the importance of thinking outside the box and exploring new possibilities.</p>
  </div>
</div>

  )
}
