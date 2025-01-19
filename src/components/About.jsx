import React from "react";
import aboutImg from "../assets/about-me.png";
import { ABOUT_TEXT } from "../constents";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="my-2 text-center  pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-gray-800 "
      >
        About <span className="text-red-600 font-bold">Me</span>
      </motion.h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <motion.img
              src={aboutImg}
              alt="M.said"
              className="rounded-3xl drop-shadow-2xl  w-80"
            />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start "
          >
            <p className="text-gray-800 my-2 max-w-screen-sm py-6 ">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
