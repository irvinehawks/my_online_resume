import React, {useState, useEffect} from "react";
import ComputersCanvas from "./canvas/Computers";

const About: React.FC = () => {
  const phrases = ["Hie, i'm Irvene Kwambana, A Full Stack Software Engineer !"];
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopIndex % phrases.length];
      if (isDeleting) {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTypingSpeed(50);
      } else {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setTypingSpeed(150);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopIndex, typingSpeed]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-indigo-60 to-purple-70 text-gray-400 flex flex-col items-center justify-center px- pt-[16vh] lg:pt-[10vh]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header Section */}
        <div className="relative w-full max-w-lg mx-auto px-2 mt-10">
          <h1 className="text-xl md:text-4xl font-bold mb-4">
            {displayedText}
            <span className="blinking-cursor text-red-500">|</span>
          </h1>
        </div>


        {/* Circular Image Section */}
        <div className="w-full flex flex-wrap items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="hidden lg:block relative w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 transform hover:scale-110 transition-all duration-300 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="./images/dev1.png"
              alt="dev1"
            />
          </div>

          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 transform hover:scale-110 transition-all duration-300 shadow-2xl rounded-full overflow-hidden border-2 border-[#00887a]">
            <img
              className="w-full h-full object-cover"
              src="./images/irvine2.jpg"
              alt="Irvene Kwambana"
            />
          </div>

          <div className="hidden lg:block relative w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 transform hover:scale-110 transition-all duration-300 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="./images/dev2.png"
              alt="dev2"
            />
          </div>
        </div>


        {/* Description Section */}
        <p className="bg-teal-900 p-2 m-2 text-lg text-white sm:text-lg md:text-lg lg:text-xl flex-wrap rounded-md">
          Backend Generalist | Machine Learning Engineer | Python | Java |
          TypeScript
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-5 text-gray-900 bg-white p-4 rounded-lg">
          <p className="p-4 text-lg sm:text-lg md:text-base lg:text-lg font-light animate-fade-in-up shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-lg">
            A passionate Software Engineer specializing in crafting seamless web
            experiences and scalable solutions. With expertise in modern
            JavaScript frameworks, cloud technologies, and a knack for solving
            complex problems, I bring ideas to life with clean and efficient code.
          </p>

          <p className="p-4 italic text-lg sm:text-lg md:text-base lg:text-lg font-light animate-fade-in-up shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-lg">
            Whether you're looking for a collaborative team player or a proactive
            individual contributor, I'm equipped with the skills and enthusiasm to
            drive projects to success. Let's build something amazing together!
          </p>
        </div>

        {/* Graphics with 3D Effects */}
        <div className="relative w-full flex justify-center mt-10">
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-blue-300 rounded-full shadow-2xl transform rotate-45 opacity-50 animate-spin-slow"></div>
          <div className="absolute w-14 h-14 sm:w-18 sm:h-18 bg-purple-300 rounded-full shadow-md animate-pulse-slow"></div>
        </div>

        {/* Call to Action */}
        <a
          href="./docs/Irvene_Kwambana_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-4 py-2 sm:px-6 sm:py-3 text-lg sm:text-lg font-semibold bg-white text-teal-600 rounded-md shadow-lg hover:bg-gray-200 hover:text-[#00887a] hover:scale-105 transform transition"
        >
          View Resume
        </a>
      </div>

      {/* Floating Animations */}
      <div className="absolute top-10 left-10 w-4 h-4 sm:w-6 sm:h-6 bg-indigo-400 rounded-full shadow-xl opacity-75 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-full shadow-lg opacity-75 animate-float delay-300"></div>
      <div className="absolute top-20 right-40 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full shadow-md opacity-75 animate-float delay-600"></div>
    </div>
  );
}

export default About;