import React from 'react'
import rowImg from '../../assets/row.webp';

const ProjectCard = ({ title, main, sourceLink, img }) => {
  return (
    <div className='p-4 md:p-6 flex flex-col w-full md:w-80 bg-[#0c0e19] hover:bg-[#1a1f2e] shadow-xl shadow-slate-900 rounded-2xl transition-all duration-300 hover:shadow-cyan-900/50 border border-slate-700 hover:border-cyan-500'>
      <img className='p-4 rounded-lg w-full h-40 object-cover' src={img || rowImg} alt="project preview"/>
      
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-4 text-white">
        {title}
      </h3>
      
      <p className="px-4 text-sm md:text-base leading-tight py-3 text-gray-300 flex-grow">
        {main}
      </p>
      
        <a href={sourceLink || '#'} className="flex-1 text-white py-2 px-4 text-center text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] hover:bg-[#556ba8] transition-colors">
          Source Code / Demo
        </a>
    </div>
  )
}

export default ProjectCard