import React from 'react';

const Testimonials = () => {
  return (
    <section className="text-white relative body-font bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-14">
      <div className="container px-5 py-0 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          {/* SVG icon color updated to match the orange theme */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-orange-300 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
          </svg>
          <p className="leading-relaxed mb-6">
          Working with Binud has been an exceptional experience. He not only developed our official website for RB Travels and Tour but also played a key role in setting up our business analytics tools and managing our digital marketing strategies. His technical expertise, proactive communication, and understanding of our brand helped us create a strong online presence and streamline our digital operations. Binud is not just a developer; he’s a reliable technology partner who genuinely cares about delivering results.
          </p>
                      {/* Decorative Animated Element */}
<div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 translate-x-4 z-0 pointer-events-none">
  <div className="w-30 h-30 bg-gradient-to-br from-orange-500 to-pink-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
</div>
          <span className="inline-block h-1 w-10 rounded bg-orange-500 mb-6" />
          <h2 className="text-white font-medium title-font tracking-wider text-sm">
          Rinku Biswas
          </h2>
          <p className="text-orange-400">Co-Founder, RB Travels and Tour</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
