import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 fixed bg-gray-200 p-4 text-[#00887a]">
      <div className="flex justify-between items-center">
        <div className="w-75% text-lg lg:text-2xl font-bold">
          Software Engineer/ Full Stack Developer
        </div>

        <div className="w-25%">

        </div>
        {/* Hamburger Button */}
        <button
          className="sm:hidden block text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {/* Menu Links */}
        <div className="hidden sm:flex space-x-4">
          <a href="#about" className="hover:text-blue-400">
           Github
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Discord
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Linkedin
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Twitter
          </a>
        </div>
      </div>
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-2 flex flex-row text-center justify-between">
          <a href="#about" className="block hover:text-blue-400">
            Github
          </a>
          <a href="#skills" className="block hover:text-blue-400">
            Discord
          </a>
          <a href="#projects" className="block hover:text-blue-400">
            Linkedin
          </a>
          <a href="#contact" className="block hover:text-blue-400">
            Twitter
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;