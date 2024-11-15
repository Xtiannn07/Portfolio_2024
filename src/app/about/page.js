//src/about/page.js
import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiPhp } from "react-icons/si";

import { SiXampp } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import './about.css';

const AboutPage = () => {
  return (
    <section>
    <div className=" w-full h-full">
      <h1 className="ml-6">Know more about me</h1>
      <p className="text-[1.5rem] text-center">Professional Skillset</p>
      <div className="grid justify-items-center items-center mt-4 max-w-xs sm:max-w-md md:max-w-lg mx-auto
      grid-cols-4 gap-1 sm:gap-1 md:gap-2 lg:gap-4 icon-center">
          <FaHtml5 className="IconSize" />
          <FaCss3Alt className="IconSize" />
          <IoLogoJavascript className="IconSize" />
          <SiTypescript className="IconSize" />
          <BiLogoCPlusPlus className="IconSize" />
          <TbBrandCSharp className="IconSize" />
          <SiPhp className="IconSize" />
          <FaPython className="IconSize" />
          <FaReact className="IconSize" />
          <RiNextjsFill className="IconSize" />
      </div>
    </div>
    <div className="mt-8">
      <p className="text-[1.5rem] text-center">Tools I use</p>
      <div className="grid justify-items-center items-center mt-4 max-w-xs sm:max-w-md md:max-w-lg mx-auto
      grid-cols-4 gap-1 sm:gap-1 md:gap-2 lg:gap-4 icon-center">
          <FaWindows className="IconSize" />
          <VscVscode className="IconSize" />
          <SiXampp className="IconSize" />
        </div>
    </div>

    </section>
  );
}

export default AboutPage;