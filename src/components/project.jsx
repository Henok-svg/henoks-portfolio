import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl my-20"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            className="flex mb-8 flex-wrap flex-col lg:flex-row lg:justify-center"
            key={index}
          >
            <motion.div
              whileInView={{ x: -100, opacity: 1 }}
              initial={{ x: -0, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full flex justify-center lg:w-1/4 lg:justify-start"
            >
              <img
                className="rounded mb-6 mx-auto"
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-center lg:text-left">
                {project.title}
              </h6>
              <p className="mb-4 font-semibold text-center lg:text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    key={techIndex}
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
  );
};

export default Project;
