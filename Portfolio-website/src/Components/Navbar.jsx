import React from 'react'

const Navbar = () => {
          return (
                    <div className='fixed w-full'>

                              <div
                                        className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 transition-all duration-200  bg-black navbar `}>
                                        <div className="flex w-11/12 max-w-maxContent items-center justify-between">


                                                  {/* Logo */}
                                                  <p>
                                                            Pratik Patidar
                                                  </p>

                                                  {/* Navigation as */}
                                                  <nav className="hidden md:block ml-4115">
                                                            <ul className="flex gap-x-8 text-richblack-25">
                                                                      <li >
                                                                                <a href="#home">

                                                                                          Home
                                                                                </a>
                                                                      </li>
                                                                      <li>   <a href="#about">

                                                                                About
                                                                      </a>
                                                                      </li>

                                                                      <li>
                                                                                <a href="#project">
                                                                                          Project
                                                                                </a>
                                                                      </li>

                                                            </ul>
                                                  </nav>

                                                  {/* Buttons Login/ Signup / Dashboard */}

                                                  <a href="https://drive.google.com/file/d/1s6srcxVyTYu4g_pnkzWRdbPXeElrY_q2/view?usp=drivesdk" target='_blank'>
                                                            <button className=" items-center gap-x-4 md:flex text-richblack-25">
                                                                      Let's Connect
                                                            </button></a>

                                        </div >
                              </div >
                    </div >
          )
}

export default Navbar
