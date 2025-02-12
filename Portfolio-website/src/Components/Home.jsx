

import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import ScrollLinked from './ui/TopSlider'
import './CSS/viewResume.css'
import Navbar from './Navbar'
import Skills from './Skills'
import Project from './Project'
import Footer from './Footer'


const Home = () => {
          return (
                    <div>


                              <HeroSection />

                              <About />
                              <Skills />
                              <Project />
                              <Footer />


                    </div >
          )
}

export default Home
