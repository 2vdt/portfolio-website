import { useState } from "react"
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { name: "About", href: "#About" },
    { name: "Experience", href: "#Experience" },
    { name: "Certification", href: "#Certification" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Footer" }
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-b from-slate-950 via-slate-900 to-transparent border-b border-slate-800/50 shadow-2xl'>
      <div className='flex flex-wrap justify-between items-center text-white px-6 md:px-16 py-4'>
        
        {/* Logo */}
        <span className="text-2xl md:text-3xl font-bold tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Portfolio
        </span>

        {/* Navigation Links */}
        <ul
          className={`${
            menu ? "flex flex-col" : "hidden"
          } md:flex absolute md:static top-16 left-0 right-0 md:top-auto md:right-auto md:flex-row gap-1 md:gap-8 bg-slate-950/95 md:bg-transparent px-6 md:px-0 py-6 md:py-0 rounded-b-3xl md:rounded-none border-b md:border-b-0 border-slate-800/50 md:border-none backdrop-blur-sm md:backdrop-blur-none`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-sm md:text-base font-medium text-slate-200 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300 py-2 md:py-0 block relative group"
                onClick={() => setMenu(false)}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 md:block hidden"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 active:scale-95"
          aria-label="Toggle menu"
        >
          {menu ? (
            <RiCloseLine 
              size={28}
              className="transition-transform duration-300 rotate-90"
            />
          ) : (
            <RiMenu2Line 
              size={28}
              className="transition-transform duration-300"
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;