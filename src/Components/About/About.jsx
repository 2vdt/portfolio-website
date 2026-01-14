import React from 'react'
import img2 from "../../assets/img2.png";
import { IoArrowForward} from "react-icons/io5";
const About = () => {
  return (
    <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-blacl shadow-xl mx-0 md:mx-20 '>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img src={img2} alt="about img"/>
                <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 I focus on building visually engaging and highly interactive user interfaces using HTML, CSS, and JavaScript. I specialize in creating responsive layouts and seamless user experiences, and I am currently expanding my expertise into modern frameworks like React to build dynamic, component-based applications.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 On the backend, I specialize in architecting efficient data systems and server-side logic using SQL and Python. I am proficient in managing relational databases to ensure data integrity and have expanded my expertise to include NoSQL solutions like MongoDB for handling flexible, scalable data structures. By combining these database technologies, I build secure, high-performance backends that power complex web applications
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                    I specialize in buliding roubust server-side applications using Node.js and Express.js . I foecus on creating scalable API endpoints,managing server logic,and ensuring secure data transections.
                </p>
              </span>
            </div>
          </ul>
            </div>
        </div>
    </div>
  )
}

export default About