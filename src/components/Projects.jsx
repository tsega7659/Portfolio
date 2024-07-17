import React from "react";
import front from "../assets/newfronr.png";
import dev from "../assets/newdev.png";
import tutor from "../assets/tutor.jpeg";
const Projects = ()=>{
    return(
        <div id="skill" className="  text-center  py-2 font-roboto text-white  bg-customBlue">
        <hr class="border-t-4 border-customTeal w-64 mx-auto  mb-4" />
        <h1 className="text-4xl text-center text-customBlue1 pt-8 ">Skills</h1>
          <p className="text-center lg:px-0 px-4  py-8">
          Front-end Developer proficient in developing cutting-edge solutions. Skilled in front-end  development.
          </p>
          <div className=" items-center lg:flex lg:mx-64 justify-between gap-4 mb-8">
               <div className="shadow-lg rounded-lg bg-white mx-4 text-customBlue1 px-2   transform transition-transform duration-300  hover:translate-y-2">
                <img className="w-24 lg:mx-28 mx-20 mt-4 lg:pt-0 pt-8" src= {front} />
                <h2 className="mt-2 ml-4 text-center font-bold text-customBlue4   ">Front-end Developmnet</h2>
                <p className="py-2 text-customBlue3 ">crafting visually stunning digital experiences. Specializing in creating beautiful interfaces that captivate and engage users.</p>
                <p className="py-2 text-customBlue3 ">React.js, JQuery,JavaScript</p>
                <p className="py-2 text-customBlue3 ">Tailwind,Bootstrap, HTML,CSS</p>
               </div>
               <div className="shadow-lg rounded-lg  bg-white text-center mx-4 lg:mt-0   px-8  transform transition-transform duration-300 hover:translate-y-2">
                 <img className="w-24 mx-20 mt-4 " src={dev} />
               <h2 className="mt-4 ml-4 text-center font-bold text-customBlue4  ">Web Developmnet</h2>
               <p className="py-2 text-customBlue3 ">Full-Stack Developer  in developing cutting-edge solutions. Skilled in front-end  development.</p>
                <p className=" text-customBlue3 ">PHP, Node.js, Express.js, MYSql</p>
               </div>
               <div>
               <div className="shadow-lg rounded-lg mx-4 bg-white text-center  lg:py-8 px-4 mt-4 lg:mt-0  transform transition-transform duration-300 hover:-translate-y-2 ">
                <img className="w-24  mx-20  pt-4" src={tutor} />
                <h2 className="  text-center font-bold text-customBlue4 mt-2  ">Tutoring</h2>
                <p className="py-6 text-customBlue3 ">Tutoring enables me to share my expertise and passion for learning while helping students reach their academic goals.</p>
                
               </div>
               </div>
               
          </div>
        </div>
      
    )
}
export default Projects