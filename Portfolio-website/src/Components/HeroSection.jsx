import React from 'react'

import '../../src/index.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";

import About from './About';
import { GridBeam } from './ui/GridBeam';
import bgImg from './images/background.jpg'
import ViewResume from './ui/ViewResume';
import Navbar from './Navbar';
const HeroSection = () => {

          return (

                    <div className='h-screen relative  bg-[#0e0e0e] overflow-hidden flex flex-col items-center justify-center px-4' id='home'>


                              <>

                                        {/* <BackgroundAnimation/> */}

                                        <img src="https://cdn.prod.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2.png"
                                                  loading="lazy" data-w-id="fc79296f-2f5d-7f21-b39b-3b6f379cd81c" sizes="100vw" alt=""
                                                  srcSet="https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-500.png 500w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-800.png 800w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-1080.png 1080w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-1600.png 1600w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-2000.png 2000w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-2600.png 2600w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-3200.png 3200w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2.png 3828w"
                                                  className=" landing-cloud-1 absolute  bottom-0" />


                                        <img src="https://cdn.prod.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2.png"
                                                  loading="lazy" data-w-id="fc79296f-2f5d-7f21-b39b-3b6f379cd81c" sizes="100vw" alt=""
                                                  srcSet="https://assets-global.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2-p-500.png 500w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2-p-800.png 800w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2-p-1080.png 1080w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2-p-1600.png 1600w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2-p-2000.png 2000w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2-p-2600.png 2600w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2-p-3200.png 3200w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647abcc4bb3d6fefb9da6929_Landing%20color%20cloud2.png 3705w"
                                                  className="landing-cloud-2 absolute" />


                                        <div
                                                  className=" flex flex-row mx-auto z-10 hover:scale-110 top-100 transition-transform duration-300"
                                        >

                                                  <GridBeam className="flex items-center justify-center flex-col max-w-lg h-12 gap-12">


                                                            <div>
                                                                      <h1 className="font-extrabold mb-4  text-4xl sm:text-5xl lg:text-6xl font-bold mb-2   text-center font-recoleta "> Pratik  Patidar </h1>
                                                                      <h1 className="text-xl lg:text-2xl text-neutral-400 mb-4  z-10 font-medium text-center  mx-auto w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none z-10 h-8 lg:text-6rem]">Full Stack Developer</h1>

                                                                      <div className="flex justify-center items-center gap-6 relative z-10">
                                                                                <a
                                                                                          href="https://in.linkedin.com/in/pratik-patidar"
                                                                                          target="_blank"
                                                                                          rel="noopener noreferrer"
                                                                                >
                                                                                          <FaGithub className="text-2xl hover:scale-110" />
                                                                                </a>
                                                                                <a
                                                                                          href="https://github.com/PratikPatidar"
                                                                                          target="_blank"
                                                                                          rel="noopener noreferrer"
                                                                                >
                                                                                          <FaLinkedinIn className="text-2xl hover:scale-110" />
                                                                                </a>
                                                                                <a
                                                                                          href="mailto:pratikpatidar7990@gmail.com"
                                                                                          target="_blank"
                                                                                          rel="noopener noreferrer"
                                                                                >
                                                                                          <MdEmail className="text-2xl hover:scale-110" />
                                                                                </a>
                                                                      </div>

                                                            </div>
                                                  </GridBeam>



                                        </div>
                                        <span className='m-4'></span>

                                        <div className='justify-center text-center m-16  top-100 z-40'>
                                                  <a href="https://drive.google.com/file/d/1s6srcxVyTYu4g_pnkzWRdbPXeElrY_q2/view?usp=drivesdk" target='_blank'>
                                                  <button className="font-extrabold mb-4rounded-lg cursor-pointer border-2 p-2  sm:text-xl lg:text-2xl font-bold mb-2   text-center font-recoleta "


                                                  >
                                                            Let's Connect
                                                            </button>
                                                  </a>
                                        </div>

                              </>
                    </div >
          )
}

export default HeroSection
