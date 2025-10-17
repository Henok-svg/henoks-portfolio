import { CONTACT } from "../constants";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_efa5s0j", // Replace with your EmailJS service ID
        "template_3c56gsa", // Replace with your EmailJS template ID
        formRef.current,
        "wtvTeiH7uItIXTPmm" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccess(true);
          setMessage("");
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          setError(true);
          setTimeout(() => setError(false), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Contact Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12"
          >
            Have a question, a project idea, or just want to connect? Fill out the form below.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get in touch</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{CONTACT.address}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{CONTACT.phoneNo}</p>
                <a 
                  href="mailto:admassuhenok123@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  {CONTACT.email}
                </a>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Henok-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/henok-sisay-3647ab295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message should be between 10 and 500 characters."
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {message.length}/500 characters
                </p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Send Message
              </button>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  Error sending message. Please try again.
                </div>
              )}
              
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Message sent successfully!
                </div>
              )}
            </motion.form>
          </div>
        </div>
        
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          
        </motion.div>
      </div>
    </section>
  )
}

export default Contact