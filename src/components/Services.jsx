import React from 'react'
import image2 from "../assets/image2.jpg"
import bagde from "../assets/badge.jpg"
import rita from"../assets/rita.jpg"
import tsimona from"../assets/tsimona.jpg"

export const Services = () => {
  return (
    <div id="projects" className="bg-customBlue  text-center md:pl-20 py-16 font-roboto  ">
        <hr class="border-t-4 border-customTeal w-64 mx-auto  mb-4" />
            <div>
                <h1 className='text-4xl text-customBlue1   py-10'>Experience</h1>
            <p className=' text-center  text-white lg:mx-64 mx-8'>I have intermediate-level experience in developing user interfaces and projects across multiple domains. Through practical exposure, I've refined my skills in creating user-friendly UI designs that prioritize usability and aesthetics. My project involvement ranges from smaller-scale applications to mid-sized projects, allowing me to gain valuable hands-on experience and enhance my proficiency.</p>
            </div>
            <div className='lg:flex mt-16 rounded-lg shadow-lg p-4 lg:mx-24'>
              <div className='lg:mt-16 text-left text-gray-500   px-4'>
                <p className='text-sm md:mx-8'>My experience encompasses aspects such as layout design, color theory and user interaction, enabling me to craft UIs that are both functional and aesthetically pleasing. I'm committed to staying updated with the latest design trends and technologies to deliver high-quality results consistently.</p>
              <div className='mt-4 mx-8'>
              <button className="bg-customBlue text-white border-2 border-customTeal rounded-full lg:py-2 py-1 lg:px-6 px-3 mb-4 hover:bg-customBlue1 hover:text-customBlue transition duration-300">
                    <a href='https://github.com/tsega7659'>Visit My Github</a> 
                  </button>
              </div>
              </div> 
              
              <div  >
                <img className='rounded-xl shadow-lg  ' src="https://images.wondershare.com/mockitt/ui-design/ui-example-round-corners-trend.png" alt="" />
              </div>

            </div>
            <div className='lg:flex mt-16 rounded-lg shadow-lg p-4 lg:mx-24'>
            <div >
                <img className='rounded-lg shadow-lg' src={image2} alt="" />
              </div>
              <div className='mt-16 text-left text-gray-400 px-4'>
                <p className='text-sm md:mx-8'>I have extensive experience as a front-end developer for a federal prison, where I honed my skills in designing user-friendly and responsive UIs. Through this role, I developed strong communication and customer service abilities, ensuring effective collaboration and support throughout projects.</p>
              <div className='mt-4 mx-8  flex justify-end'>
              <button className="bg-customBlue text-white border-2 border-customTeal rounded-full lg:py-2 py-1 lg:px-6 px-3 hover:bg-customBlue1 hover:text-customBlue transition duration-300">
                    <a href='https://github.com/tsega7659'>Visit My Project</a> 
                  </button>
              </div>
              </div> 
              </div>
              <div className='lg:flex lg:mt-16 rounded-lg shadow-lg p-4 lg:mx-24'>
              <div className='lg:mt-16 text-left text-gray-400 px-4'>
                <p className='text-sm md:mx-8'>By completing courses offered by IBM, I cultivated a wide range of valuable skills. These include enhanced interpersonal capabilities, which enable effective communication and collaboration within teams. Additionally, I developed strong problem-solving skills, allowing me to tackle complex challenges efficiently and find effective solutions.</p>
              <div className='mt-4 mx-8'>
              <button className="bg-customBlue text-white border-2 border-customTeal rounded-full mb-6 lg:mb-0 lg:py-2 py-1 lg:px-6 px-3 hover:bg-customBlue1 hover:text-customBlue transition duration-300">
                    <a href='https://www.credly.com/badges/e8126e73-5d34-435b-9d05-3d756348d2da/public_url'>Visit My Credly</a> 
                  </button>
              </div>
              </div> 
              
              <div >
                <img className='rounded-lg shadow-lg' src={bagde} alt="" />
              </div>

            </div>
            <div className='lg:flex mt-16 rounded-lg shadow-lg p-4 lg:mx-24'>
            <div >
                <img className='rounded-lg shadow-lg' src={rita} alt="" />
            </div>
              <div className='mt-16 text-left text-gray-400 px-4'>
                <p className='text-sm md:mx-8'>Delighted to showcase my journey in front-end web development, where I crafted a website using React and Tailwind CSS. I embraced creativity and coding skills to design a sleek and user-friendly interface. Excited to further explore the endless possibilities of React and Tailwind in future projects!</p>
              <div className='mt-4 mx-8  flex justify-end'>
              <button className="bg-customBlue text-white border-2 border-customTeal rounded-full lg:py-2 py-1 lg:px-6 px-3 hover:bg-customBlue1 hover:text-customBlue transition duration-300">
                    <a href='https://ritta-flowers.netlify.app/'>Visit My Project</a> 
                  </button>
              </div>
              </div> 
              </div>
              <div className='lg:flex lg:mt-16 rounded-lg shadow-lg p-4 lg:mx-24'>
              <div className='lg:mt-16 text-left text-gray-400 px-4'>
                <p className='text-sm md:mx-8'>I have practiced many techniques for handling APIs using React and Tailwind CSS.  
                  Creating responsive pages has been particularly rewarding.  
                  Ensuring full functionality in these pages has been a key focus.  
                  I've learned a lot about making user interfaces adaptable to different devices.  
                  This experience has significantly enhanced my web development skills.</p>
              <div className='mt-4 mx-8'>
              <button className="bg-customBlue text-white border-2 border-customTeal rounded-full mb-6 lg:mb-0 lg:py-2 py-1 lg:px-6 px-3 hover:bg-customBlue1 hover:text-customBlue transition duration-300">
                    <a href='https://tsimonabooks.netlify.app/'>Visit My Project</a> 
                  </button>
              </div>
              </div> 
              <div >
                <img className='rounded-lg shadow-lg' src={tsimona} alt="" />
              </div>

            </div>
            
    </div>

  )
}
