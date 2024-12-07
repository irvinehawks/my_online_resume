// Import necessary dependencies
import React, { useState } from "react";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-50 fixed bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 p-2 rounded-full">
            {/* Software engineer icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 6.75l-4.5 4.5m0 0l4.5 4.5m-4.5-4.5H21m-9-9v18"
              />
            </svg>
          </div>
          <h1 className="p-2 gap-2 italic flex text-lg lg:text-xl font-bold">
            I build Software
            <FaLaptopCode className="text-purple-600 text-3xl lg:text-4xl mr-2 lg:block" />
          </h1>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-6">
          <a
            href="https://github.com/irvinehawks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/irvene-kwambana-a429021a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/WadzanaiIrvines"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Discord
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleNavbar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col justify-end items-end">
          <a
            href="https://github.com/irvinehawks/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-400"
          >
           <FaTwitterSquare />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-400"
          >
           <FaDiscord />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;