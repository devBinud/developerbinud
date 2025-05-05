import React from 'react';
import "./Hero.css"
import { ChevronRight, Github, Linkedin, Globe } from 'lucide-react';
import AnimatedCircles from './AnimatedCircle';

const Hero = () => {
  return (
    <section className="relative text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
      <div className="container mx-auto flex px-5 pt-15 md:flex-row flex-col items-center">
        {/* Left content */}
        <div className="p-4 md:p-10 lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          {/* Gradient Heading */}
          <h1 className="sm:text-5xl pb-2 text-4xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-300 to-yellow-100 animate-text-glow">
          Bringing Your Ideas<br />to Life Through Code
          </h1>
{/* Decorative Animated Element */}
<div className="absolute right-60 top-1/2 transform -translate-y-1/2 translate-x-4 z-0 pointer-events-none">
  <div className="w-30 h-30 bg-gradient-to-br from-orange-500 to-orange-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
</div>

          <p className="mx-auto leading-relaxed text-lg font-mono text-gray-400 mb-5">
  <span className="inline-block">&lt;&gt;</span> I help transform ideas into robust digital systems that improve efficiency, enable automation, and support sustainable growth.<span className="inline-block">&lt;/&gt;</span>
</p>

          {/* Button + Icons */}
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
            {/* Glowing Button */}
            <a
  href="#contact" // Or your desired destination
  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300 animate-pulse-slow cursor-pointer"
>
Request Your Free Demo
  <ChevronRight size={20} className="mt-0.5" />
</a>


            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/devBinud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-transform duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/binudpanging"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-transform duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://binud.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-transform duration-300 hover:scale-110"
              >
                <Globe size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right image */}
        <AnimatedCircles/>
      </div>
    </section>
  );
};

export default Hero;
