import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

import { FaReact } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";

import React from "react";
import { motion } from "motion/react";
import { animate } from "motion";

const iconsVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}}
        className="my-2 text-center  pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-gray-800 "
      >
        <span className="text-red-600 font-bold">Me</span> Technologies
      </motion.h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:2}}
      className="flex flex-wrap items-center justify-center gap-4 ">
        <motion.div
          variants={iconsVar(1.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-red-800 p-4"
        >
          <FaNode className="text-7xl text-green-800" />
        </motion.div>
        <motion.div
          variants={iconsVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-red-800 p-4"
        >
          <DiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconsVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-red-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsVar(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-red-800 p-4"
        >
          <RiNextjsLine className="text-7xl text-black" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
