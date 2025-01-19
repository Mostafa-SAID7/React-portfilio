import React from "react";
import { PROJECTS } from "../constents";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 ">
        <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}}
          className="my-2 text-center  pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-gray-800 "
        >
          <span className="text-red-600 font-bold">Me</span> Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
              className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  className="mb-6 rounded "
                  alt={project.title}
                />
              </motion.div>
              <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
              className="w-full max-w-xl lg:w-3/4 ">
                <h5 className="mb-2 font-semibold ">{project.title}</h5>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    key={index}
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

export default Projects;
