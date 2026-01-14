import React from 'react'

import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Foter = () => {
  const contactLinks = [
    {
      icon: MdOutlineEmail,
      label: "rimshashahzadi760@gmail.com",
      link:"rimshashahzadi760@gmail.com",
    },
    {
      icon: CiLinkedin,
      label: "linkedin.com /Rimsha-shahzadi",
      link: "https://www.linkedin.com/in/rimsha-shahzadi-2aa65a261/",
    },
    {
      icon: FaGithub,
      label: "github.com/Rimsha",
      link: "https://github.com/2vdt"
    }
  ];

  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-gradient-to-r from-[#010827] to-[#364e8f] text-white p-10 md:p-12 items-center gap-8"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal mt-2">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-4">
        {contactLinks.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <li key={index} className="flex gap-3 items-center hover:scale-105 transition-transform duration-300">
              <a
                href={contact.link}
                target={contact.link.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex gap-3 items-center text-white hover:text-blue-300 transition-colors duration-300"
              >
                <IconComponent size={24} />
                <span>{contact.label}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="text-center md:text-right">
        <p className="text-xs md:text-sm text-gray-200 mt-6 md:mt-0">
          © 2026 Rimsha Shahzadi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Foter