import aboutpic from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
         About
        <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration:(0.4) }}
               className="w-full lg:w-1/2 lg:p-8">
               <div className="flex items-center justify-center">
                    <img 
                        className="rounded-2xl" src={aboutpic} alt="about" />
               </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration:(0.4) }}
              className="w-full lg:w-1/2 lg: p-8 max-w-xl my-2">
                <div className="flex items-center justify-center">
                    <p>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About