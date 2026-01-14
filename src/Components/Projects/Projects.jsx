import React from 'react'
import ProjectCard from './ProjectCard';
import img1 from '../../assets/e com.png';
import img2 from '../../assets/cryp.png';
import img3 from '../../assets/count.png';
import img4 from '../../assets/quiz.png';
import img5 from '../../assets/weth.png';
import img6 from '../../assets/reg.png';

const Projects = () => {
  const projectData = [
    {
       img: img1,
      title: "E-commerce Platform",
      main: "A full-stack e-commerce platform built with React, Node.js, MongoDB, and modern UI component libraries. Features product catalog, cart management, and secure checkout.",
      sourceLink: "https://striajeans.netlify.app/",
    },
    {
        img: img2,
      title: "Cryptec Secure Encryption",
      main: "A secure web application for encryption and decryption of files, images, documents, and messages using JavaScript and cryptographic algorithms.",
      
      sourceLink: "https://github.com/2vdt/creptec-secure-encryptio"
    },
    {
        img: img3,
      title: "Counter APP",
      main: "A React-based counter application with state management, demonstrating component lifecycle and hooks implementation.",
      sourceLink: "#"
    },
    {
        img:img4,
      title: "Quiz App",
      main: "A React-based quiz application with state management, demonstrating component lifecycle and hooks implementation.",
      sourceLink: "https://leafy-eclair-44dee7.netlify.app/"
    },
    {
      img:img5,
      title: "Weather APP",
      main: "A React-based weather application with state management, demonstrating component lifecycle and hooks implementation.",
      sourceLink: "https://github.com/2vdt/Weather-Application"
    },
    {
      img:img6,
      title: "Student Registration sysytem",
      main:" A python-based student registration sysytem with files handling and data storage implementation.",
      sourceLink: "https://github.com/2vdt/student-registration-system"
    },
  ];

  return (
    <div id="Projects" className='p-10 md:p-24 text-white bg-gradient-to-b from-slate-900 to-black'>
      <h1 className='text-3xl md:text-4xl  font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent  transition-transform duration-300'>Projects</h1>
      <p className='text-gray-400 mb-12'>Explore some of my featured projects and contributions</p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
            img={project.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects