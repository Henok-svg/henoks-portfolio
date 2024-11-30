import { HERO_CONTENT } from "../constants";
import profilepic from '../assets/Batman.jpg';
import scroll from '../assets/scroll.png';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible:{
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay },
  },
});
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2' >
          <div className='flex flex-col items-center lg:items-start '>
            <motion.h1   
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
            ><b>Henok Sisay</b>
            </motion.h1>
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
            >Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >{HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100 , opacity: 0}}
              animate={{ x: 0 , opacity: 1}}
              transition={{duration: 1, delay:1}}

              src={profilepic} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt=""
          />
        </div>
    </div>
  )
}

export default Hero