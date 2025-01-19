import React from "react";
import { EXPERIENCES } from "../constents";
import { motion } from "motion/react";

const Experiences = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 ">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-2 text-center  pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-gray-800 "
        >
          <span className="text-red-600 font-bold">Me</span> Experiences
        </motion.h2>
        <div>
          {EXPERIENCES.map((experiences, index) => (
            <div key={index} className="mb-4 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 "
              >
                <p className="mb-2 text-sm text-neutral-400 ">
                  {experiences.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 "
              >
                <h5 className="mb-2 font-semibold">
                  {experiences.role}-
                  <span className="text-sm text-purple-100 ">
                    {experiences.company}
                  </span>
                </h5>
                <p className="mb-4 text-neutral-400 ">
                  {experiences.description}
                </p>
                {experiences.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-400 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experiences;
