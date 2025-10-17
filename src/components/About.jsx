import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          About Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {ABOUT_TEXT}
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://github.com/Henok-svg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/henok-sisay-3647ab295"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/dazed.in.void"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <FaInstagram className="h-5 w-5" />
                Instagram
              </a>
              <a
                href="https://t.me/Wikihen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <FaTelegramPlane className="h-5 w-5" />
                Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About