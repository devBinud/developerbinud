import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          {/* Location pin icon with address */}
          <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C8.134 2 5 5.134 5 9c0 3.333 4.5 9 7 13 2.5-4 7-9.667 7-13 0-3.866-3.134-7-7-7z"
              />
            </svg>
          </div>
          {/* Address text */}
          <p className="ml-3 text-sm">Guwahati, Assam (IN)</p>
        </a>

        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
          © copyright 2025 | All Rights Reserved
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* GitHub (External Link) */}
          <a
            href="https://github.com/devBinud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.047.138 3.003.403 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.92.432.372.816 1.102.816 2.222 0 1.604-.015 2.898-.015 3.293 0 .324.216.7.825.582C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>

          {/* Twitter (External Link) */}
          <a
            href="https://x.com/binudp_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-400 hover:text-white"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.03v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          {/* LinkedIn (External Link) */}
          <a
            href="https://linkedin.com/in/binudpanging"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-400 hover:text-white"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx={4} cy={4} r={2} />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
