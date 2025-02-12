"use client"

import { motion, useSpring, useScroll } from "motion/react"
import HeroSection from "../HeroSection"
import About from "../About"

export default function ScrollLinked() {


          return (
                    <>
                              <img src="https://cdn.prod.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2.png" loading="lazy" data-w-id="fc79296f-2f5d-7f21-b39b-3b6f379cd81c" sizes="100vw" alt="" srcset="https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-500.png 500w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-800.png 800w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-1080.png 1080w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-1600.png 1600w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-2000.png 2000w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-2600.png 2600w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2-p-3200.png 3200w, https://assets-global.website-files.com/605d01759b2d0182669e8304/647ab90142d2b2d30662abab_Landing%20color%20cloud%201.2.png 3828w" class="landing-cloud-1" style="will-change: transform, filter; transform: translate3d(7.88544vw, 14.9819vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0.71936deg) skew(-27.2749deg, -11.9838deg); transform-style: preserve-3d; filter: hue-rotate(40.464deg);">
                              </img>
                    </>
          )
}

/**
 * ==============   Utils   ================
 */

function Content() {
          return (
                    <>
                              <article >
                                        <HeroSection />
                                        <About />
                              </article>
                    </>
          )
}
