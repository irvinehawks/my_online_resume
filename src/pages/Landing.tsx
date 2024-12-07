import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Chatbot from '../components/ChatBot'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Navbar from '../components/Navbar'


function Landing() {
  return (
    <div className="">
      <Navbar />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Chatbot />
      <Footer />
    </div>
  )
}

export default Landing
