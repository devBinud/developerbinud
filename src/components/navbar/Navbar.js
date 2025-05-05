import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AiOutlineMail } from 'react-icons/ai';
import { LiaCodeSolid } from "react-icons/lia";
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for active route

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path ? 'bg-gray-800' : '';

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <Link to="/" className="flex title-font font-medium items-center text-white">
          <div className="w-10 h-10 p-2 bg-orange-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 18l6-6-6-6M8 6l-6 6 6 6"
              />
            </svg>
          </div>
          <span className="ml-3 text-xl">Binud Panging</span>
        </Link>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-5 items-center">
          <Link to="/" className={`hover:bg-gray-800 px-2 py-2 rounded-md transition ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`hover:bg-gray-800 px-2 py-2 rounded-md transition ${isActive('/about')}`}>About</Link>
          <Link to="/portfolio" className={`hover:bg-gray-800 px-2 py-2 rounded-md transition ${isActive('/portfolio')}`}>Portfolio</Link>
          <Link to="/services" className={`hover:bg-gray-800 px-2 py-2 rounded-md transition ${isActive('/services')}`}>Services</Link>
          <div className="flex items-center">
            <Link to="/products" className={`hover:bg-gray-800 px-2 py-2 rounded-md transition ${isActive('/products')}`}>Products for Business</Link>
            <span className="ml-0 text-xs bg-orange-300 text-orange-800 py-1 px-2 rounded-full">
              New
            </span>
          </div>
          <Link to="/contact" className={`hover:bg-gray-800 px-2 py-2 rounded-md transition ${isActive('/contact')}`}>Contact</Link>

          {/* Mail Me - Desktop Only */}
          <a
            href="mailto:binudp.dev@gmail.com"
            className="ml-4 border-2 border-orange-400 py-2 px-4 hover:bg-orange-400 hover:text-white rounded-full text-orange-400 text-sm transition duration-300 flex items-center"
          >
            Mail Me
            <AiOutlineMail className="w-4 h-4 ml-2" />
          </a>
        </nav>
      </div>

      {/* Right Drawer - Mobile View */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-6 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="mt-12 space-y-4">
          <Link to="/" className={`block hover:bg-gray-800 px-3 py-2 rounded-md transition ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`block hover:bg-gray-800 px-3 py-2 rounded-md transition ${isActive('/about')}`}>About</Link>
          <Link to="/portfolio" className={`block hover:bg-gray-800 px-3 py-2 rounded-md transition ${isActive('/portfolio')}`}>Portfolio</Link>
          <Link to="/services" className={`block hover:bg-gray-800 px-3 py-2 rounded-md transition ${isActive('/services')}`}>Services</Link>
          <div className="flex items-center">
            <Link to="/products" className={`block hover:bg-gray-800 px-3 py-2 rounded-md transition ${isActive('/products')}`}>Products for Business</Link>
            <span className="ml-2 text-xs bg-orange-300 text-orange-800 py-1 px-2 rounded-full">
              New
            </span>
          </div>
          <Link to="/contact" className={`block hover:bg-gray-800 px-3 py-2 rounded-md transition ${isActive('/contact')}`}>Contact</Link>

          {/* Mail Me - Mobile Drawer */}
          <a
            href="mailto:binudp.dev@gmail.com"
            className="block w-full border-2 border-orange-400 py-2 px-4 hover:bg-orange-400 hover:text-white rounded-full text-orange-400 text-sm transition duration-300 flex items-center justify-center mt-4"
          >
            Mail Me
            <AiOutlineMail className="w-4 h-4 ml-2" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
