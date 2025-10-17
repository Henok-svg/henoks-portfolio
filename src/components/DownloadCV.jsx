import { motion } from "framer-motion";

const DownloadCV = () => {
  return (
    <section id="cv" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Resume
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8"
        >
          Download my latest CV/Resume as a PDF.
        </motion.p>

        <motion.a
          whileTap={{ scale: 0.98 }}
          href="/Henok-Sisay-CVResume.pdf"
          download="Henok-Sisay-CVResume.pdf"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default DownloadCV;


