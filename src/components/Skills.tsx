import React from "react";
import { useSpring, animated } from "react-spring";

function Skills() {
  const animatedProps = useSpring({
    loop: true,
    to: [{ opacity: 1, transform: "translateY(0px)" }, { opacity: 0.8, transform: "translateY(-10px)" }],
    from: { opacity: 0.8, transform: "translateY(-10px)" },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen bg-white text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">My Skills</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {/* Programming Languages */}
        <animated.div
          className="p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          style={animatedProps}
        >
          <h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
          <ul className="space-y-2">
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript/ TypeScript</li>
          </ul>
        </animated.div>

        {/* Frameworks */}
        <animated.div
          className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          style={animatedProps}
        >
          <h2 className="text-2xl font-semibold mb-4">Frameworks</h2>
          <ul className="space-y-2">
            <li>React</li>
            <li>Node.js</li>
            <li>Nest.js</li>
            <li>Django</li>
          </ul>
        </animated.div>

        {/* Databases */}
        <animated.div
          className="p-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          style={animatedProps}
        >
          <h2 className="text-2xl font-semibold mb-4">Databases</h2>
          <ul className="space-y-2">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </animated.div>

        {/* DevOps */}
        <animated.div
          className="p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          style={animatedProps}
        >
          <h2 className="text-2xl font-semibold mb-4">DevOps</h2>
          <ul className="space-y-2">
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </animated.div>

        {/* Machine Learning */}
        <animated.div
          className="p-6 bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          style={animatedProps}
        >
          <h2 className="text-2xl font-semibold mb-4">Machine Learning</h2>
          <ul className="space-y-2">
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Scikit-learn</li>
            <li>Pandas</li>
            <li>Numpy</li>
          </ul>
        </animated.div>

        {/* Version Control */}
        <animated.div
          className="p-6 bg-gradient-to-r from-red-500 to-teal-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          style={animatedProps}
        >
          <h2 className="text-2xl font-semibold mb-4">Version Control</h2>
          <ul className="space-y-2">
            <li>Git</li>
            <li>Github Actions</li>
          </ul>
        </animated.div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-pink-500 to-red-600 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
}

export default Skills;