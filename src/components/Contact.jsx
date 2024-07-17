import React from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div id="contact" className="  font-roboto bg-customBlue pb-24">
              <hr class="border-t-4 border-customTeal w-64 mx-auto   mb-4" />
      <h1 className="py-12 text-4xl text-center text-customBlue1 ">Contact Me</h1>
     <div className='lg:flex lg:space-x-8 bg-customTeal rounded-2xl lg:mx-64 mx-4 pb-6'>
        <div className='flex flex-col items-center w-full px-8 py-4 lg:w-[50%]  '>
          <div className='flex items-center lg:mt-32 p-2'>
            <FaUser size={36} className='text-customBlue1' />
            <div className='ml-2 p-2  text-white'>
              <h1 className=' font-bold'>Name</h1>
              <p>Yeabsira Zelalem</p>
            </div>
          </div>
          <div className='flex items-center p- '>
            <FaPhone size={36} className='text-customBlue1' />
            <div className='ml-2 p-2 text-white'>
              <h1 className=' font-bold'>Phone</h1>
              <p>+251-976-647-859</p>
            </div>
          </div>
          <div className='flex items-center p-2'>
            <FaMapMarkerAlt size={36} className='text-customBlue1' />
            <div className='ml-2 p-2 text-white'>
              <h1 className=' font-bold'>Address</h1>
              <p>Ethiopia, Addis Ababa</p>
            </div>
          </div>
          <div className='flex items-center p-2 ml-20'>
            <FaEnvelope size={36} className='text-customBlue1' />
            <div className='ml-2 p-2 text-white'>
              <h1 className=' font-bold'>Email</h1>
              <p>yeabsirazelalem791@gmail.com</p>
            </div>
          </div>
          
        </div>
        <div className='w-full px-8 py-4 lg:w-[50%]'>
          <form action="mailto:yeabsirazelalem791@gmail.com" method="" encType="multipart/form-data">
            <div className="flex flex-col space-y-2">
              <label className="uppercase text-sm mt-2 text-white">Name</label>
              <input type="text" name="name" className="border-2 rounded-lg p-2 border-customBlue1 bg-customBlue1" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="uppercase text-sm mt-2 text-white">Email</label>
              <input type="email" name="email" className="border-2 rounded-lg p-2 border-customBlue1 bg-customBlue1" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="uppercase text-sm mt-2 text-white">Subject</label>
              <input type="text" name="subject" className="border-2 rounded-lg p-2 border-customBlue1 bg-customBlue1" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="uppercase text-sm text-white">Message</label>
              <textarea rows="5" name="message" className="border-2 rounded-lg p-3 border-customBlue1 bg-customBlue1"></textarea>
            </div>
            <button className=" text-white border-2  rounded-lg mb-6 mt-2 lg:mb-0 lg:py-2 py-1 lg:px-6 px-3 border-customBlue1 hover:bg-customBlue1 hover:text-customBlue transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
