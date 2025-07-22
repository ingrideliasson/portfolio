import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen scroll-mt-16 pt-16 flex flex-col items-center justify-center text-center px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
        Get in Touch
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8 font-montserrat">
        Feel free to reach out if you’d like to collaborate, have a question, or just want to connect.
      </p>

      <a
        href="mailto:your.email@example.com"
        className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors underline underline-offset-4"
      >
        your.email@example.com
      </a>
    </section>
  );
}