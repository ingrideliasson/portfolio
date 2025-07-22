import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white flex justify-center items-center px-6 py-4 space-x-6 text-3xl">
      <a
            href="https://github.com/ingrideliasson?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-600"><FontAwesomeIcon icon={faGithub} />
        </a>
      
        <a
            href="https://www.linkedin.com/in/ingrid-eliasson-262bba21a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-600 selected:text-blue-300"><FontAwesomeIcon icon={faLinkedin} />
        </a>
    </footer>
  );
}