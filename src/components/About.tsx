import React from "react";

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-indigo-60 to-purple-70 text-gray-400 flex flex-col items-center justify-center px- pt-[16vh] lg:pt-[10vh]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header Section */}
        <div className="relative w-full max-w-lg mx-auto pl-2 pr-2 mt-10">
          <h1
            className="flex-grow text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing animate-blink"
            style={{
              animationTimingFunction: "steps(30, end)",
              animationDuration: "12s",
              animationIterationCount: "infinite",
            }}
          >
            Hi, I'm Irvene Kwambana, tech guy!
          </h1>
        </div>

        {/* Circular Image Section */}
        <div className="w-full flex flex-wrap items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="hidden lg:block relative w-24 h-24 sm:w-32 sm:h-32 lg:w-52 lg:h-52 transform hover:scale-110 transition-all duration-300 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="./images/dev1.png"
              alt="dve1"
            />
          </div>

          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 transform hover:scale-110 transition-all duration-300 shadow-2xl rounded-full overflow-hidden border-4 border-[#00887a]">
            <img
              className="w-full h-full object-cover"
              src="./images/irvine2.jpg"
              alt="Irvene Kwambana"
            />
          </div>

          <div className="hidden lg:block relative w-24 h-24 sm:w-32 sm:h-32 lg:w-52 lg:h-52 transform hover:scale-110 transition-all duration-300 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="./images/dev2.png"
              alt="dev2"
            />
          </div>
        </div>

        {/* Description Section */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Backend Generalist | Machine Learning Advocate | Python, Java,
          TypeScript
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-5 text-gray-900 bg-white p-5 rounded-lg">
          <p className="p-4 text-sm md:text-base lg:text-lg font-light animate-fade-in-up shadow-[inset_0px_-1px_0px_4px_#d53f8c] rounded-lg">
            A passionate Software Engineer specializing in crafting seamless web
            experiences and scalable solutions. With expertise in modern
            JavaScript frameworks, cloud technologies, and a knack for solving
            complex problems, I bring ideas to life with clean and efficient code.
          </p>

          <p className="p-4 italic text-sm md:text-base lg:text-lg font-light animate-fade-in-up shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-lg">
            Whether you're looking for a collaborative team player or a proactive
            individual contributor, I'm equipped with the skills and enthusiasm to
            drive projects to success. Let's build something amazing together!
          </p>
        </div>

        {/* Graphics with 3D Effects */}
        <div className="relative w-full flex justify-center mt-12">
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-blue-300 rounded-full shadow-2xl transform rotate-45 opacity-50 animate-spin-slow"></div>
          <div className="absolute w-20 h-20 sm:w-28 sm:h-28 bg-purple-300 rounded-full shadow-md animate-pulse-slow"></div>
        </div>

        {/* Call to Action */}
        <a
          href="./docs/Irvene_Kwambana_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold bg-white text-teal-600 rounded-md shadow-lg hover:bg-gray-200 hover:text-[#00887a] hover:scale-105 transform transition"
        >
          View Resume / CV
        </a>
      </div>

      {/* Floating Animations */}
      <div className="absolute top-10 left-10 w-6 h-6 sm:w-10 sm:h-10 bg-indigo-400 rounded-full shadow-xl opacity-75 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-8 h-8 sm:w-12 sm:h-12 bg-purple-400 rounded-full shadow-lg opacity-75 animate-float delay-300"></div>
      <div className="absolute top-20 right-40 w-6 h-6 sm:w-10 sm:h-10 bg-blue-400 rounded-full shadow-md opacity-75 animate-float delay-600"></div>
    </div>
  );
}

export default About;