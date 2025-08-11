import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  // Optional: show navbar only after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          className="fixed w-full z-50"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="flex h-14 items-center justify-center border-b border-richblack-700 
                       bg-gradient-to-r from-[#0f0f0f]/95 to-[#1a1a1a]/95 
                       backdrop-blur-md shadow-md"
          >
            <div className="flex w-11/12 max-w-maxContent items-center justify-between">
              
              {/* Logo */}
              <motion.p
                className="text-white font-bold text-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Pratik Patidar
              </motion.p>

              {/* Navigation */}
              <nav className="hidden md:block">
                <ul className="flex gap-x-8 text-gray-300 font-medium">
                  {["Home", "About", "Project"].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ scale: 1.1, color: "#a855f7" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="transition-colors duration-200 hover:text-purple-400"
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Connect Button */}
              <motion.a
                href="https://drive.google.com/file/d/1s6srcxVyTYu4g_pnkzWRdbPXeElrY_q2/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <button className="items-center gap-x-2 md:flex text-white border border-purple-500 px-4 py-1 rounded-lg hover:bg-purple-600 transition-colors duration-200">
                  Let's Connect
                </button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
