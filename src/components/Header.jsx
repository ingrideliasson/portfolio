import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-brown px-6 py-4 font-bold font-montserrat text-yellow-600">
      <nav className="flex flex-wrap justify-end items-center space-x-6 text-sm sm:text-base">
        <a href="#home" className="hover:text-pink-700">HOME</a>
        <a href="#about" className="hover:text-pink-700">ABOUT</a>
        <a href="#skills" className="hover:text-pink-700">SKILLS</a>
        <a href="#projects" className="hover:text-pink-700">PROJECTS</a>
        <a href="#contact" className="hover:text-pink-700">CONTACT</a>
      </nav>
    </header>
  );
}
