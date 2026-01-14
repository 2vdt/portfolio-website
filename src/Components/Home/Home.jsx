import React from 'react'
import img1 from  "../../assets/img1.png"
import TextChanger from '../../../TextChanger'
const Home = () => {
  return (
    <div  className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
            <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent  transition-transform duration-300">
                <TextChanger/>
            </h1>
              <p className=" mt-5 text-sm md:text-xl tracking-tight ">
A passionate and dedicated web developer with a knack for creating dynamic and responsive web application interfaces.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </div>
        <div>
            <img  src={img1} alt="" /> 
        </div>
    </div>
  )
}

export default Home