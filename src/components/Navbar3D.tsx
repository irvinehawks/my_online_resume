import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa"; // Import the chosen icon

const Navbar3D: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Github", href: "https://github.com/irvinehawks", target: "_blank" },
    { name: "Discord", href: "" },
    { name: "Linkedin", href: "https://www.linkedin.com/in/irvene-kwambana-a429021a0/" },
    { name: "Twitter", href: "https://x.com/WadzanaiIrvines" },
  ];

  return (
    <nav className="w-full z-50 fixed bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center p-2 gap-2">
            <FaLaptopCode className="text-purple-600 font-bold text-3xl lg:text-4xl mr-2 lg:block hidden" />
            <img src="./images/logo2.png" alt="logo" width="50px" className="bg-white rounded-xl" />
            <p className="italic text-purple-700 font-semibold lg:text-lg">--Software Engineer--</p>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="text-black md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute top-full left-0 w-full bg-white md:static md:flex md:w-auto md:space-x-8 md:bg-transparent ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="flex-row group relative cursor-pointer text-[#00887a]"
            >
              <a
                href={link.href}
                className="relative z-10 block px-4 py-2 font-medium text-lg transition-all duration-300 ease-in-out hover:text-gray-900 md:inline-block"
              >
                {link.name}
              </a>
              {/* 3D Effect */}
              <div className="absolute left-0 top-0 z-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 rounded-md"></div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar3D;