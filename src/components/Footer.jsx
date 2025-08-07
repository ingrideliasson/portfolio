import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex justify-center items-center px-6 py-4 space-x-6 text-3xl text-yellow-600 bg-brown">
      <a
            href="https://github.com/ingrideliasson?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-700"><FontAwesomeIcon icon={faGithub} />
        </a>
      
        <a
            href="https://www.linkedin.com/in/ingrid-eliasson-262bba21a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-700"><FontAwesomeIcon icon={faLinkedin} />
        </a>
    </footer>
  );
}