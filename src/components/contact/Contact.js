import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import social media icons

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          
          {/* Address Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-gray-700">1234 Street Name, City, State, 12345</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-700 hover:text-gray-900 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-gray-700 hover:text-gray-900 transition duration-300" />
            </a>
            <a href="mailto:your.email@example.com">
              <FaEnvelope className="text-3xl text-gray-700 hover:text-gray-900 transition duration-300" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-gray-700 hover:text-gray-900 transition duration-300" />
            </a>
            <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-gray-700 hover:text-gray-900 transition duration-300" />
            </a>
          </div>

          {/* Optional: If you have any other details to display, you can add them below */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">Feel free to reach out to me on any of the platforms!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
