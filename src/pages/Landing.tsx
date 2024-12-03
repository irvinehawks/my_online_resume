import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Chatbot from '../components/ChatBot'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Navbar3D from '../components/Navbar3D'

function Landing() {
  return (
    <div className="">
      <Navbar3D />
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
