import React from "react";

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white flex items-center justify-center p-6 pt-[16vh]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Circular Image Section */}
        <div className="flex items-center justify-cente lg:flex-row space-x-4 justify-evenly lg:space-x-6">
          <div className="hidden sm:block relative w-32 h-32 sm:w-52 sm:h-52 lg:w-43 lg:h-43 transform hover:scale-110 transition-all duration-300 rounded- overflow-hidden">
            <img
              className="hidden sm:block w-full h-full object-cover lg:w-56 lg:h-56"
              src="./images/dev1.png"
              alt="Irvene Kwambana"
            />
          </div>

          <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 transform hover:scale-110 transition-all duration-300 shadow-2xl rounded-full overflow-hidden border-4 border-indigo-500">
            <img
              className="w-full h-full object-cover"
              src="./images/irvine2.jpg"
              alt="Irvene Kwambana"
            />
          </div>

          <div className="hidden sm:block relative w-40 h-40 sm:w-52 sm:h-52 lg:w-43 lg:h-43 transform hover:scale-110 transition-all duration-300 overflow-hidden">
            <img
              className="hidden sm:block w-full h-full object-cover lg:w-56 lg:h-56"
              src="./images/dev2.png"
              alt="Irvene Kwambana"
            />
          </div>
        </div>

        {/* Header Section */}
        <h1 className="text-3xl font-bold animate-fade-in-down">
          Hi, I'm Irvene Kwambana
        </h1>

        <p className="text-xl">
          Backend Generalist | Machine Learning Advocate | Python, Java,
          TypeScript
        </p>

        <p className="text-lg sm:text-xl md:text-2xl font-light animate-fade-in-up">
          A passionate Software Engineer specializing in crafting seamless web
          experiences and scalable solutions. With expertise in modern
          JavaScript frameworks, cloud technologies, and a knack for solving
          complex problems, I bring ideas to life with clean and efficient code.
        </p>

        <p className="text-md sm:text-lg md:text-xl font-light animate-fade-in-up delay-200">
          Whether you're looking for a collaborative team player or a proactive
          individual contributor, I'm equipped with the skills and enthusiasm to
          drive projects to success. Let's build something amazing together!
        </p>

        {/* Graphics with 3D Effects */}
        <div className="relative w-full flex justify-center mt-12">
          <div className="absolute w-48 h-48 bg-blue-300 rounded-full shadow-2xl transform rotate-45 opacity-50 animate-spin-slow"></div>
          <div className="absolute w-32 h-32 bg-purple-300 rounded-full shadow-md animate-pulse-slow"></div>
        </div>

        {/* Call to Action */}
        <a
          href="./docs/Irvene_Kwambana_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-md shadow-lg hover:scale-105 transform transition"
        >
          View Resume / CV
        </a>
      </div>

      {/* Floating Animations */}
      <div className="absolute top-10 left-10 w-10 h-10 bg-indigo-400 rounded-full shadow-xl opacity-75 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-full shadow-lg opacity-75 animate-float delay-300"></div>
      <div className="absolute top-20 right-40 w-12 h-12 bg-blue-400 rounded-full shadow-md opacity-75 animate-float delay-600"></div>
    </div>
  );
}

export default About;