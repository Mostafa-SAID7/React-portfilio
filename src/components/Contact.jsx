import React from "react";
import { CONTACT } from "../constents";
import { motion } from "motion/react";


const Contact = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 ">
        <motion.h2
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
        className="my-2 text-center   text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-gray-800 ">
          Contact <span className="text-red-600 font-bold">Me</span>
        </motion.h2>
        <div className="text-center tracking-tighter ">
            <p className="my-4 ">{CONTACT.address}</p>
            <p className="my-4 ">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b ">{CONTACT.email}</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
