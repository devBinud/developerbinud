import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden min-h-screen flex items-center justify-center px-6">
      {/* Slow, smooth circular pulse in background */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-400 opacity-15 animate-soft-ping z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md clip-path-custom z-0"></div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-10 py-20">

        {/* Left Glass Card - Developer Journey */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10">
          <h2 className="text-xl font-semibold text-orange-300 mb-4">My Journey</h2>
          <p className="text-white/80 text-base mb-4 leading-relaxed">
            I started my journey as a self-taught coder, gradually mastering frontend and backend development. Over the years, I’ve worked with multiple startups, building scalable web applications and mobile experiences.
          </p>
          <p className="text-white/70 text-sm mb-6">
            I'm passionate about clean architecture, meaningful UI/UX, and deploying robust systems that make real-world impact.
          </p>
          <div className="space-y-2 text-sm text-white/80">
            <p>🔗 <a href="https://github.com/devBinud" className="underline hover:text-orange-400">GitHub</a></p>
            <p>🔗 <a href="https://linkedin.com/in/binudpanging" className="underline hover:text-orange-400">LinkedIn</a></p>
            <p>📍 Based in Guwahati Assam, India</p>
            <p>💼 3+ years MERN Stack Experience</p>
          </div>
        </div>

        {/* Right - Agile Workflow */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg space-y-4 text-left">
  <h2 className="text-xl font-semibold text-orange-300 mb-4">My Agile Workflow</h2>

  
  <hr className="border-white/10" />

  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
    I follow a fast-paced, feedback-driven workflow where each project is divided into focused, goal-driven sprints—
    covering ideation, design, development, testing, and delivery in iterative cycles.
  </p>
  
  <p className="text-gray-400 text-sm md:text-base">
    It's not just about writing code — it's about building meaningful, evolving systems that stay aligned with your vision every step of the way.
  </p>
</div>

      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-orange-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
        }

        @keyframes soft-ping {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.25);
            opacity: 0.05;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
        }

        .animate-soft-ping {
          animation: soft-ping 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
