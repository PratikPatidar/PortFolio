import React from "react";
import { motion } from "framer-motion";
import { GridPatternDashed } from "./ui/GridDashPattern";
import { FaLink, FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  })
};

// Floating animation for icons
const floatAnimation = {
  animate: {
    y: [0, -4, 0, 4, 0], // sine-like up and down
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Footer = () => {
  return (
    <div className="footer-bg  border-neutral-800">
      <GridPatternDashed>
        <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-3 font-bold mt-10">
              <FaLink className="size-5 text-purple-400" />
              <h2 className="text-xl xl:text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Connect with me
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                {
                  href: "https://in.linkedin.com/in/pratik-patidar",
                  icon: <FaLinkedinIn className="size-5" />,
                  label: "Pratik Patidar"
                },
                {
                  href: "mailto:pratikpatidar7990@gmail.com",
                  icon: <MdOutlineEmail className="size-5" />,
                  label: "pratikpatidar7990@gmail.com"
                },
                {
                  href: "https://github.com/PratikPatidar",
                  icon: <LuGithub className="size-5" />,
                  label: "pratikpatidar"
                }
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg text-neutral-400 font-medium hover:text-white transition-colors"
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <motion.span {...floatAnimation}>{link.icon}</motion.span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Closing Message & Resume */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-neutral-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-1">
              <p>Thanks for reaching the bottom of this page.</p>
              <p>If you like what you see,</p>
              <p>let's connect and build something together!</p>
            </div>

            <div>
              <p>Alternatively, here's a fancy sheet of paper.</p>
              <motion.a
                href="https://drive.google.com/file/d/1s6srcxVyTYu4g_pnkzWRdbPXeElrY_q2/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 flex items-center underline hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Resume</span>
                <FiDownload className="ml-1 mt-[2px]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </GridPatternDashed>
    </div>
  );
};

export default Footer;
