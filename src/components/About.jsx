import React from 'react'
import image from "../assets/me.png"
export const About = () => {
  return (
    <div className='lg:flex  bg-customBlue font-roboto py-8' id='about'>
      <div className=' bg-customTeal justify-center lg:mx-64 lg:flex  mx-6  rounded-3xl mb-12 text-white'>
      <div className='    lg:flex items-center   '>
        <img className="md:mx-32 max-md:mx-10 md:w-96 md:h-72 h-64 pl-8 lg:pl-0" src={image} alt="Girl" />
      </div>

      <div className='items-center text-center justify-center md:mt-24 mt-4 py-8 '>
        <h1 className='text-4xl '>About me</h1>
        <p className='py-4 px-4 sm:mx-44  flex sm:text-left  text-center '>Hello, my name is Yeabsira Zelalem. I'm a software engineering student and a front-end developer. I have hands-on experience working on various projects, focusing on creating responsive pages loaded with functionality.</p>
      </div>
      </div>
  
</div>

  )
}
