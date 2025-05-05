import React from 'react';

const Counts = () => {
  return (
    <section className="bg-gray-900 text-white body-font relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
            Empowering Brands & Startups Through Code
          </h1>
            {/* Decorative Animated Element */}
<div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 translate-x-4 z-0 pointer-events-none">
  <div className="w-40 h-40 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
</div>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-mono text-gray-400">
  <span className="inline-block">&lt;&gt;</span> I specialize in creating seamless and impactful web experiences that drive business growth. <span className="inline-block">&lt;/&gt;</span>
</p>


        </div>

     
        <div className="flex flex-wrap -m-4 text-center">
  {/* Years of Experience */}
  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div className="backdrop-blur-md bg-white/5 border border-white/10 px-4 py-6 rounded-2xl shadow-lg">
      <svg className="w-10 h-10 mb-3 inline-block text-orange-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      <h2 className="text-3xl font-semibold text-white">4.5+</h2>
      <p className="text-orange-200 font-semibold mt-1">Years of Experience</p>
    </div>
  </div>

  {/* Projects Completed */}
  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div className="backdrop-blur-md bg-white/5 border border-white/10 px-4 py-6 rounded-2xl shadow-lg">
      <svg className="w-10 h-10 mb-3 inline-block text-orange-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 17v-2a4 4 0 014-4h4" />
        <path d="M3 3h18v4H3z" />
        <path d="M3 9h18v12H3z" />
      </svg>
      <h2 className="text-3xl font-semibold text-white">43+</h2>
      <p className="text-orange-200 font-semibold mt-1">Projects Completed</p>
    </div>
  </div>

  {/* Satisfied Clients */}
  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div className="backdrop-blur-md bg-white/5 border border-white/10 px-4 py-6 rounded-2xl shadow-lg">
      <svg className="w-10 h-10 mb-3 inline-block text-orange-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="4" />
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
      </svg>
      <h2 className="text-3xl font-semibold text-white">24+</h2>
      <p className="text-orange-200 font-semibold mt-1">Satisfied Clients</p>
    </div>
  </div>

  {/* Team Collaborations */}
  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div className="backdrop-blur-md bg-white/5 border border-white/10 px-4 py-6 rounded-2xl shadow-lg">
      <svg className="w-10 h-10 mb-3 inline-block text-orange-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="19" cy="7" r="4" />
      </svg>
      <h2 className="text-3xl font-semibold text-white">10+</h2>
      <p className="text-orange-200 font-semibold mt-1">Team Collaborations</p>
    </div>
  </div>
</div>

     
      </div>
    </section>
  );
};

export default Counts;
