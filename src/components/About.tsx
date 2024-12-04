import React from "react";

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-indigo-60 to-purple-70 text-gray-400 flex items-center justify-center p-6 pt-[16vh]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header Section */}
        <div className="relative w-full max-w-lg mx-auto mt-10">
          <h1
            className="text-3xl font-bold italic whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing animate-blink"
            style={{ animationTimingFunction: "steps(30, end)", animationDuration: "12s", animationIterationCount: "infinite" }}
          >
            Hi, I'm Irvene Kwambana, tech guy!
          </h1>
        </div>


        {/* Circular Image Section */}
        <div className="w-full flex items-cente justify-cente lg:flex-row space-x-4 justify-around lg:space-x-8">
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

        <p className="text-xl">
          Backend Generalist | Machine Learning Advocate | Python, Java,
          TypeScript
        </p>

        <div className="w-full text-gray-900 bg-white p-5 flex lg:flex-row flex-col gap-5 rounded-lg">
          <p className="p-4 text-lg lg:text-xl text-start font-light animate-fade-in-up shadow-[inset_0px_-1px_0px_4px_#d53f8c] rounded-lg">
            A passionate Software Engineer specializing in crafting seamless web
            experiences and scalable solutions. With expertise in modern
            JavaScript frameworks, cloud technologies, and a knack for solving
            complex problems, I bring ideas to life with clean and efficient code.
          </p>

          <p className="p-4 italic text-lg lg:text-xl text-start font-light animate-fade-in-up shadow-[5px_5px_0px_0px_rgba(109,40,217)] border- rounded-lg">
            Whether you're looking for a collaborative team player or a proactive
            individual contributor, I'm equipped with the skills and enthusiasm to
            drive projects to success. Let's build something amazing together!
          </p>
        </div>

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
          className="inline-block mt-8 px-6 py-3 text-lg font-semibold bg-white text-teal-600 rounded-md shadow-lg hover:bg-gray-200 hover:text-[#00887a] hover:scale-105 transform transition"
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