import { HERO_CONTENT } from "../constents";
import imgPorfile from "../assets/M.said.png";
import React from "react";
import { motion } from "motion/react";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 1, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-gray-800"
            >
              <span className="text-red-600 font-bold">DEV</span> M.Said
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1.3)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-bold text-gray-600 tracking-tighter "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1}}
              src={imgPorfile}
              alt="M.said"
              className="bg-gray-400 rounded-3xl drop-shadow-2xl  w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
