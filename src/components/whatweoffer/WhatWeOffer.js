import React from 'react';

// Import images from the assets folder
import webDevImage from '../../assets/images/1.jpg';
import appDevImage from '../../assets/images/webdev.jpeg';
import aiImage from '../../assets/images/8.jpg';
import maintenanceImage from '../../assets/images/56.jpg';
import wordpressDevImage from '../../assets/images/2.jpg';
import uiUxDesignImage from '../../assets/images/3.jpg';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Designs that delight users and drive engagement through intuitive interfaces.',
    image: uiUxDesignImage,
  },
  {
    title: 'Web Development',
    description: 'Responsive, high-performance websites tailored for your brand.',
    image: webDevImage,
  },
  {
    title: 'Mobile App Development',
    description: 'Fast, cross-platform apps for iOS and Android using modern tech stacks.',
    image: appDevImage,
  },
  {
    title: 'AI-Powered Solutions',
    description: 'Implement smart features like recommendations, chatbots, and process automation.',
    image: aiImage,
  },
  {
    title: 'WordPress Development',
    description: 'Custom, easy-to-manage WordPress solutions for all kinds of businesses.',
    image: wordpressDevImage,
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing care to keep your website or app secure, updated, and optimized.',
    image: maintenanceImage,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-18 text-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services Tailored for Modern Businesses</h2>
          <p className="text-gray-400 text-lg font-mono text-center">
  <span className="inline-block">&lt;&gt;</span> Crafting digital solutions that drive business growth and elevate user experience. <span className="inline-block">&lt;/&gt;</span>
</p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <div
      key={index}
      className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
      />
      <div>
        <h3 className="text-lg font-semibold mb-1 text-orange-200">{service.title}</h3> {/* Lighter orange */}
        <p className="text-gray-300 text-sm">{service.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default WhatWeOffer;
