//main page
"use client";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import './globals.css';  // Import relative to layout.js

export default function HomePage() {
  return (
      <section className="flex flex-col md:flex-row w-full h-full">
        {/* Left Column */}
        <div className="w-full mr-6 ml-2 md:w-1/2 p-2">
          <h1 className="mt-4">Hey There!</h1>
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="text-[2.5rem] sm:text-[2.75rem] md:text-[3rem]">
                I AM CHRISTIAN MARC</h2>
          </div>
          {/* Flex Container for Animation and Buttons */}
          <div className="flex flex-col items-center justify-center mt-1 space-y-2">
            <TypeAnimation
              sequence={[
                "Programmer",
                2000,
                "Web Developer",
                2000,
                "App Developer",
                2000,
              ]}
              speed={70}
              className="text-accent"
              wrapper="span"
              style={{ fontSize: "2.5rem", color: "black", minWidth: "200px" }} // Set min-width
              repeat={Infinity}
            />

            {/* Buttons */}
            <div className="flex sm:gap-2 md:gap-6 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 
            justify-center items-center">
              <button className="btn">Contact me</button>
              <button className="btn">My Resume</button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <Image
          src="/Gradpic1.jpg"
          alt="Gradpic"
          width={100}
          height={100}
          className="rounded-full w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
          my-3 sm:my-4 mx-auto md:w-1/3 lg:w-1/2"
        />
      </section>

  );
}