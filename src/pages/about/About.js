import React from 'react';
import AboutUs from '../../components/about/AboutUs';

const About = () => {
  return (
    <section className="text-white body-font bg-gray-900 pt-10">
      <AboutUs />
      <div className="container px-5 py-14 mx-auto flex flex-wrap">

{/* Step 1 */}
<div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
    <div className="h-full w-1 bg-gradient-to-t from-orange-500 to-purple-500 pointer-events-none"></div>
  </div>
  <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-100 text-orange-500 relative z-10 title-font font-medium text-xs">
    1
  </div>
  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    <div className="flex-shrink-0 w-16 h-16 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    </div>
    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
      <h2 className="font-medium title-font text-orange-300 mb-1 text-lg">Requirement Analysis</h2>
      <p className="leading-relaxed text-sm">We start with a clear discussion to understand your goals, users, and needed features before defining the roadmap.</p>
    </div>
  </div>
</div>

{/* Step 2 */}
<div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
    <div className="h-full w-1 bg-gradient-to-t from-orange-500 to-purple-500 pointer-events-none"></div>
  </div>
  <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-100 text-orange-500 relative z-10 title-font font-medium text-xs">
    2
  </div>
  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    <div className="flex-shrink-0 w-16 h-16 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    </div>
    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
      <h2 className="font-medium title-font text-orange-300 mb-1 text-lg">Design & Planning</h2>
      <p className="leading-relaxed text-sm">Using Figma, we visualize your product with clean, component-based UI tailored to your brand and audience.</p>
    </div>
  </div>
</div>

{/* Step 3 */}
<div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
    <div className="h-full w-1 bg-gradient-to-t from-orange-500 to-purple-500 pointer-events-none"></div>
  </div>
  <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-100 text-orange-500 relative z-10 title-font font-medium text-xs">
    3
  </div>
  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    <div className="flex-shrink-0 w-16 h-16 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="3" />
        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
      </svg>
    </div>
    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
      <h2 className="font-medium title-font text-orange-300 mb-1 text-lg">Development</h2>
      <p className="leading-relaxed text-sm">Frontend and backend run in parallel using MERN stack, clean architecture, and reusable components.</p>
    </div>
  </div>
</div>

{/* Step 4 */}
<div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
    <div className="h-full w-1 bg-gradient-to-t from-orange-500 to-purple-500 pointer-events-none"></div>
  </div>
  <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-100 text-orange-500 relative z-10 title-font font-medium text-xs">
    4
  </div>
  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    <div className="flex-shrink-0 w-16 h-16 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
      <h2 className="font-medium title-font text-orange-300 mb-1 text-lg">Testing & Launch</h2>
      <p className="leading-relaxed text-sm">Each build is tested and deployed via CI/CD with live hosting on Vercel, Render, or DigitalOcean.</p>
    </div>
  </div>
</div>

</div>


    </section>
  );
};

export default About;
