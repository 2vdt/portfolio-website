import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact , } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiNodedotjs, SiMongodb } from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      icon: FaPython,
      color: "#3776ab",
      title: "Software Engineer",
      period: "Sept 2023 - Dec 2023",
      description: "Backend Development",
      points: ["Developed backend APIs using Python", "3 months experience", "Database optimization"]
    },
    {
      icon: FaDatabase,
      color: "#13aa52",
      title: "Database Engineer",
      period: "Jan 2024 - Aug 2024",
      description: "Database Management",
      points: ["Managed MongoDB databases", "Query optimization", "Data migration"]
    },
    {
      icon: SiNodedotjs,
      color: "#68a063",
      title: "Full Stack Developer",
      period: "Sept 2025 - Present",
      description: "MERN Stack Development",
      points: ["Building React applications", "Node.js backend development", "REST API design"]
    }
  ];

  return (
    <div id="Experience" className="p-10 md:p-24 bg-gradient-to-b from-black to-slate-900">
      <h1 className="text-2xl md:text-4xl  font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent  transition-transform duration-300">Experience & Skills</h1>
      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">Technical Skills</h2>
        <div className="flex flex-wrap items-center justify-around gap-6">
          <span className="p-3 bg-zinc-950 hover:bg-zinc-800 transition-all rounded-2xl cursor-pointer transform hover:scale-110">
            <FaHtml5 color="#E34F26" size={50} title="HTML5" />
          </span>
          <span className="p-3 bg-zinc-950 hover:bg-zinc-800 transition-all rounded-2xl cursor-pointer transform hover:scale-110">
            <FaCss3 color="#1572B6" size={50} title="CSS3" />
          </span>
          <span className="p-3 bg-zinc-950 hover:bg-zinc-800 transition-all rounded-2xl cursor-pointer transform hover:scale-110">
            <FaReact color="#61DAFB" size={50} title="React" />
          </span>
          <span className="p-3 bg-zinc-950 hover:bg-zinc-800 transition-all rounded-2xl cursor-pointer transform hover:scale-110">
            <FaJs color="#F7DF1E" size={50} title="JavaScript" />
          </span>
          <span className="p-3 bg-zinc-950 hover:bg-zinc-800 transition-all rounded-2xl cursor-pointer transform hover:scale-110">
            <FaPython color="#3776ab" size={50} title="Python" />
          </span>
          <span className="p-3 bg-zinc-950 hover:bg-zinc-800 transition-all rounded-2xl cursor-pointer transform hover:scale-110">
            <SiNodedotjs color="#68a063" size={50} title="Node.js" />
          </span>
          <span className="p-3 bg-zinc-950 hover:bg-zinc-800 transition-all rounded-2xl cursor-pointer transform hover:scale-110">
            <SiMongodb color="#13aa52" size={50} title="MongoDB" />
          </span>
        </div>
      </div>

      {/* Experience Timeline */}
      <div>
        <h2 className="text-xl md:text-2xl  font-semibold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">Work Experience</h2>
        <div className="flex flex-wrap gap-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div key={index} className="flex gap-10 bg-slate-950 bg-opacity-45 hover:bg-opacity-65 transition-all mt-4 rounded-lg p-6 items-start flex-1 min-w-[300px] border-l-4 border-cyan-500 shadow-lg">
                <IconComponent color={exp.color} size={50} className="flex-shrink-0 mt-1" />
                <span className="text-white flex-grow">
                  <h2 className="leading-tight font-bold text-lg">{exp.title}</h2>
                  <p className="text-sm leading-tight font-thin text-cyan-400 mb-2">
                    {exp.period}
                  </p>
                  <p className="text-sm text-gray-300 mb-3">{exp.description}</p>
                  <ul className="text-sm p-2 space-y-1">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="text-gray-300">• {point}</li>
                    ))}
                  </ul>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      </div>
  )
}

export default Experience