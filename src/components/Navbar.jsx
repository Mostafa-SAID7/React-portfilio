import logo from "../assets/logo.png";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";


const Navbar = () => {
  return (
    <div>
      <nav className="  mb-5 flex items-center justify-between pt-2">
        <div className="size-32 flex flex-shrink-0 items-center">
          <img
            className="  size-full pl-2"
            src={logo}
            alt="DEV M.said"
          />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
            <FaFacebook className="hover:text-gray-800"/>
            <AiFillGithub className="hover:text-gray-800"/>
            <PiLinkedinLogoFill className="hover:text-gray-800"/>
            <TiSocialInstagram className="hover:text-gray-800"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
