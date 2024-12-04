import React from 'react';

function Projects() {
  const projectData = [
    {
      title: "Crop Disease Detection System",
      description:
        "An AI-powered system to detect crop diseases and recommend treatments.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "E-Passport System",
      description:
        "A secure, digital passport system streamlining international travel.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Tourism Resort WebApp",
      description:
        "A web application showcasing resort offerings with seamless booking.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Ecommerce Platform",
      description:
        "A robust platform for buying and selling products with ease.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Weather App",
      description:
        "An intuitive weather application with real-time updates and forecasts.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "JobConnect Platform",
      description:
        "A platform connecting job seekers with opportunities worldwide.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h1>
      <p className="text-center mb-12 text-gray-600 text-lg">
        A collection of projects showcasing my skills and expertise.
      </p>
      <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 font-medium hover:underline"
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <div className="w-10 h-10 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-10 h-10 bg-green-400 rounded-full animate-bounce ml-4"></div>
        <div className="w-10 h-10 bg-yellow-400 rounded-full animate-bounce ml-4"></div>
      </div>
    </div>
  );
}

export default Projects;