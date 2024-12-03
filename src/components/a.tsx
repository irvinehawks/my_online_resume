import React from 'react'

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Header Section */}

        <div className="flex items-center justify-center">
          <img 
            className="rounded-xl w-[8vw] h-[48vh] sm:w-3/4 md:w-1/2 lg:w- object-cover"
            src="./images/irvine2.jpg" 
            alt="Responsive image"
          />
        </div>

        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl animate-fade-in-down">
          Hi, I'm Irvene Kwambana
        </h1>

        <p className="text-xl">Backend Generalist | Machine Learning Advocate | Python, Java, TypeScript</p>

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

        {/* Graphics */}
        <div className="relative w-full flex justify-center overflow-hidden mt-12">
          <div className="w-48 h-48 bg-blue-300 rounded-full opacity-50 animate-spin-slow absolute"></div>
          <div className="w-32 h-32 bg-purple-300 rounded-full opacity-50 animate-pulse-slow"></div>
        </div>

        {/* Call to Action */}
        <a
          href="./docs/Irvene_Kwambana_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-md shadow-lg hover:scale-105 transform transition"
        >
          View Resume/ CV
        </a>
      </div>

      {/* Floating Animations */}
      <div className="absolute top-10 left-10 w-10 h-10 bg-indigo-400 rounded-full opacity-75 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-75 animate-float delay-300"></div>
      <div className="absolute top-20 right-40 w-12 h-12 bg-blue-400 rounded-full opacity-75 animate-float delay-600"></div>
    </div>
  )
}

export default About;