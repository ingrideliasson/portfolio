import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white flex justify-end items-center px-6 py-4 space-x-6 font-semibold font-lexend text-gray-400">
      <a href="#home" className="hover:text-gray-500">HOME</a>
      <a href="#about" className="hover:text-gray-500">ABOUT</a>
      <a href="#skills" className="hover:text-gray-500">SKILLS</a>
      <a href="#projects" className="hover:text-gray-500">PROJECTS</a>
      <a href="#contact" className="hover:text-gray-500">CONTACT</a>
    </header>
  );
}