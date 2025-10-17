import { HERO_CONTENT } from "../constants";
import profilepic from '../assets/Photo.jpg';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "./Typewriter";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible:{
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hey there, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">Henok</span>
            </motion.h1>
            
            <motion.div
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 flex items-center"
            >
              I'm a {'  '}
              <Typewriter 
                texts={[" Full Stack Developer", " React Developer", " Node.js Developer", " Problem Solver"]}
                speed={100}
                delay={2000}
              />
            </motion.div>
            
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              {HERO_CONTENT}
            </motion.p>
            
            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20"></div>
              <img
                src={profilepic}
                alt="Henok Sisay"
                className="relative w-80 h-80 object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero