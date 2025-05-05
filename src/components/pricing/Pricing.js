import React from 'react';

const Pricing = () => {
  const plans = [
    { title: 'START', price: 'Free', features: 3, borderColor: 'border-blue-500', bg: 'bg-blue-900' },
    { title: 'PRO', price: '$38/mo', features: 4, borderColor: 'border-purple-500', bg: 'bg-purple-900', highlight: true },
    { title: 'BUSINESS', price: '$56/mo', features: 5, borderColor: 'border-green-500', bg: 'bg-green-900' },
    { title: 'SPECIAL', price: '$72/mo', features: 4, borderColor: 'border-pink-500', bg: 'bg-pink-900' },
  ];

  return (
    <section className="bg-gray-900 text-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">Pricing</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Choose a plan that fits your needs. Flexible pricing for everyone.
          </p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-600 text-white focus:outline-none">Monthly</button>
            <button className="py-1 px-4 text-gray-300 hover:bg-indigo-600 hover:text-white focus:outline-none transition">
              Annually
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {plans.map((plan, index) => (
            <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div
                className={`h-full p-6 rounded-2xl border-2 ${plan.borderColor} ${plan.bg} shadow-lg transform transition hover:scale-105 duration-300 flex flex-col relative overflow-hidden`}
              >
                {plan.highlight && (
                  <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-sm tracking-widest title-font mb-1 font-semibold text-indigo-300">{plan.title}</h2>
                <h1 className="text-5xl text-white font-bold pb-4 mb-4 border-b border-gray-700">
                  {plan.price}
                </h1>
                {Array.from({ length: plan.features }).map((_, i) => (
                  <p key={i} className="flex items-center text-gray-300 mb-3">
                    <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-indigo-600 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Premium Feature {i + 1}
                  </p>
                ))}
                <button
                  className={`mt-auto text-white font-semibold ${
                    plan.highlight ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-700 hover:bg-gray-600'
                  } py-2 px-4 rounded-xl transition duration-300`}
                >
                  Choose Plan
                  <svg
                    className="w-4 h-4 ml-2 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  Get all the features you need for success.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
