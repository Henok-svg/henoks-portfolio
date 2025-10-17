import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.0 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-start lg:gap-8"
            >
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -60, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center lg:text-left">
                  {experience.year}
                </p>
              </motion.div>

              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -60, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold text-gray-900 dark:text-white text-center lg:text-left">
                  {experience.role} -{" "}
                  <span className="text-blue-600 dark:text-blue-400">{experience.company}</span>
                </h6>
                <p className="mb-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
                <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {experience.description2}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-3 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

