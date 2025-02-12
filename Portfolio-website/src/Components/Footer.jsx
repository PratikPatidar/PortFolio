import React from 'react'
import { GridPatternDashed } from './ui/GridDashPattern'
import { FaLink, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {

          return (
                    <div className='footer-bg'>

                              <GridPatternDashed>

                                        <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16  ">


                                                  <div className='mb-8'>

                                                            <div className="flex items-center gap-2 justify-start mb-2.5 font-bold mt-10">
                                                                      <FaLink className="size-5" />
                                                                      <div className="text-xl xl:text-2xl">Connect with me</div>
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                                                                      <a href='https://in.linkedin.com/in/pratik-patidar' target='new' className="flex items-center gap-2 hover:text-white hover:underline"
                                                                      >
                                                                                <FaLinkedinIn className="size-5" />

                                                                                <div className="text-lg text-neutral-400 font-medium flex items-center gap-2 hover:text-white hover:underline">Pratik Patidar

                                                                                </div>
                                                                      </a>
                                                                      <a href="mailto:pratikpatidar7990@gmail.com" target='new' className="flex items-center gap-2 hover:text-white hover:underline"
                                                                      >
                                                                                <MdOutlineEmail className="size-5" />

                                                                                <div className="text-lg text-neutral-400 font-medium flex items-center gap-2 hover:text-white hover:underline">pratikpatidar7990@gmail.com

                                                                                </div>
                                                                      </a>
                                                                      <a href='https://github.com/PratikPatidar' target='new' className="flex items-center gap-2 hover:text-white hover:underline"
                                                                      >
                                                                                <LuGithub className="size-5" />

                                                                                <div className="text-lg text-neutral-400 font-medium flex items-center gap-2 ">pratikpatidar

                                                                                </div>
                                                                      </a>
                                                            </div>
                                                  </div>
                                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                            <div className="text-l xl:text-xl max-w-10"><p>Thanks for reaching the bottom of this page.
                                                            </p>    <p>If you like what you see,</p>    <p> let's connect and build something together!</p></div>

                                                            <div ml-2>
                                                                      <p >

                                                                                Alternatively, here's a fancy sheet of paper.
                                                                      </p>
                                                                      <a href="https://drive.google.com/file/d/1s6srcxVyTYu4g_pnkzWRdbPXeElrY_q2/view?usp=drivesdk" target='_blank' className='text-blue-600 flex flex-row underline'>
                                                                                <span >

                                                                                          Resume
                                                                                </span>
                                                                                <FiDownload className='mt-1 ml-1' />

                                                                      </a>
                                                            </div>
                                                  </div>
                                        </div>

                              </GridPatternDashed >
                    </div >

          )
}

export default Footer
