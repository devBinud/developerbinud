import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
  SiMysql,
} from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'React Native', icon: <SiMongodb className="text-blue-400" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
];

const Services = () => {
  return (
    <section className="text-gray-100 body-font bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-white">Technologies I Use</h1>
          <p className="text-lg text-gray-400 font-mono text-center">
  <span className="inline-block">&lt;&gt;</span> Modern and powerful tools we use in development. <span className="inline-block">&lt;/&gt;</span>
</p>


        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
  {technologies.map((tech, index) => (
    <div
      key={tech.name}
      className="w-32 h-32 sm:w-36 sm:h-36 bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-md flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105 hover:shadow-xl duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
                  {/* Decorative Animated Element */}
<div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 translate-x-4 z-0 pointer-events-none">
  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-400 opacity-20 rounded-full blur-xl animate-pulse"></div>
</div>
      <div className="text-4xl sm:text-5xl mb-2">{tech.icon}</div>
      <p className="text-white text-sm sm:text-base font-medium">{tech.name}</p>
    </div>
    
  ))}
</div>


      </div>
    </section>
  );
};

export default Services;
