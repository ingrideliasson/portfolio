import React from 'react';
import { IoMdFlower } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className="flex flex-col items-center text-center px-4 ">
        <IoMdFlower className="hidden lg:block absolute  lg:top-[10%] lg:left-[15%] text-5xl md:text-8xl lg:text-9xl text-pink-800 animate-slow-spin" />
        <IoMdFlower className="hidden lg:block absolute bottom-[21%] right-[17%] text-5xl md:text-8xl lg:text-7xl text-pink-800 animate-slow-spin" />

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-600 font-mogra mb-8">
        Get in Touch!
      </h2>

      <div className="flex flex-col gap-6 text-pink-800">
        <div className="flex items-center justify-center hover:text-pink-700 gap-4">
          <div className="text-3xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <a
            href="https://www.linkedin.com/in/ingrid-eliasson-262bba21a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold underline underline-offset-4"
          >
            <span>LinkedIn</span>
          </a>
        </div>

        <a
          href="mailto:in.eliasson@gmail.com"
          className="text-xl font-semibold underline underline-offset-4 hover:text-pink-700"
        >
          in.eliasson@gmail.com
        </a>
      </div>
    </div>
  );
}
