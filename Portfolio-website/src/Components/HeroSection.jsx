import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import "../../src/index.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

const HeroSection = () => {
  const role = "Full Stack Developer";
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Continuous typing + deleting animation
  useEffect(() => {
    const typingSpeed = isDeleting ? 60 : 100; // delete faster than type

    if (!isDeleting && charIndex < role.length) {
      const timeout = setTimeout(() => {
        setText(role.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText(role.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (charIndex === role.length) {
      // wait before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (charIndex === 0 && isDeleting) {
      // restart typing
      setIsDeleting(false);
    }
  }, [charIndex, isDeleting, role]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16 sm:pt-20 lg:pt-28 bg-black font-[Poppins]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 spotlight-bg"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          Pratik Patidar
        </motion.h1>

        {/* Typing Animation for Role */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4 h-10 flex relative tracking-wide"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              style={{ whiteSpace: "pre" }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative"
            >
              {char}
            </motion.span>
          ))}

          {/* Underline gradient only when text is fully typed */}
          {!isDeleting && charIndex === role.length && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"
            ></motion.div>
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-gray-400 text-center max-w-xl mb-8"
        >
          Crafting responsive and engaging digital experiences with a passion
          for clean code and modern design.
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/PratikPatidar" },
            {
              icon: <FaLinkedinIn />,
              link: "https://in.linkedin.com/in/pratik-patidar",
            },
            {
              icon: <MdEmail />,
              link: "mailto:pratikpatidar7990@gmail.com",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 2 + index * 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                transition: { type: "spring", stiffness: 200 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-300 hover:text-white transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Let's Connect Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.4, duration: 0.6, ease: "easeOut" },
          }}
          whileHover={{
            scale: 1.08,
            backgroundColor: "#f3f4f6",
            color: "#111",
            boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-white text-black font-medium shadow-lg transition-colors duration-300"
          style={{ animation: "pulse 2s infinite" }}
        >
          Let’s Connect
        </motion.a>
      </div>

      {/* Pulse animation style */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
