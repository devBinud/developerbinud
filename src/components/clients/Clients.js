import React from 'react';

const Clients = () => {
  return (
    <section className="text-white body-font bg-gradient-to-br from-gray-900 via-gray-800 to-black py-14">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Our Clients
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Our professional team dedicated to delivering excellent services.
          </p>
        </div>

        {/* Display images in a single row */}
        <div className="flex justify-center space-x-6">
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full"
              src="https://dummyimage.com/80x80"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full"
              src="https://dummyimage.com/84x84"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full"
              src="https://dummyimage.com/88x88"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full"
              src="https://dummyimage.com/90x90"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full"
              src="https://dummyimage.com/94x94"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full"
              src="https://dummyimage.com/98x98"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full"
              src="https://dummyimage.com/100x90"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full"
              src="https://dummyimage.com/104x94"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
