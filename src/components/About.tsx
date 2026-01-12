import React from 'react';
import OptimizedImage from './OptimizedImage';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <OptimizedImage
                src="/kitchen.png"
                alt="Modern luxury kitchen showcasing The Real Producers' high-end property expertise in Miami and Broward County real estate"
                className="w-full h-96 lg:h-[500px] object-cover"
                width={600}
                height={500}
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-stone-800 text-white p-6 rounded-lg shadow-xl max-w-xs">
              <h3 className="text-xl font-bold mb-2">Excellence in Every Deal</h3>
              <p className="text-stone-200 text-sm">
                Over 500+ successful transactions and $2B+ in sales volume
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-6">
              <span className="text-stone-600 text-lg font-medium">About Our Team</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-6">
                Meet The Real Producers
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                We are a premier team of real estate professionals at Grand Realty of America,
                dedicated to delivering exceptional results in South Florida's real estate markets.
                Our expertise spans decades throughout Miami Dade and Broward Counties.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Market Expertise</h3>
                  <p className="text-stone-600">
                    Deep knowledge of local markets, trends, and investment opportunities
                    that give our clients a competitive advantage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Dedicated Service</h3>
                  <p className="text-stone-600">
                    Personalized attention and support throughout every step of your
                    real estate journey, ensuring your goals are achieved.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 013.138 3.138 3.42 3.42 0 001.946.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946-.806 3.42 3.42 0 013.138-3.138 3.42 3.42 0 00.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Proven Results</h3>
                  <p className="text-stone-600">
                    Track record of successful transactions, satisfied clients, and
                    exceptional outcomes that speak to our professional excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#producers"
                className="inline-flex items-center bg-[#df1e36] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#c01830] transition-colors"
              >
                Meet Our Team
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
