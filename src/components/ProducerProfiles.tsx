import React from 'react';
import OptimizedImage from './OptimizedImage';

const ProducerProfiles = () => {
  return (
    <section id="producers" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-600 text-lg font-medium">Guiding You Through Every Step</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-6">
            Meet Viviana and Eugenia
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left side - Viviana's photo */}
          <div className="flex justify-center">
            <OptimizedImage
              src="/Viviana_Headshot.png"
              alt="Viviana - Real Estate Professional"
              className="w-full max-w-xs rounded-lg shadow-lg"
              width={300}
              height={400}
            />
          </div>

          {/* Center - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-lg text-stone-700 leading-relaxed">
                Viviana is a former New Yorker that came to Miami 30 years ago and fell in love with the weather, the culture, and the people. Eugenia moved to Miami 40 years ago from Texas and fell in love with all things Florida.
              </p>
            </div>

            <div>
              <p className="text-lg text-stone-700 leading-relaxed">
                Viviana and Eugenia have been local realtors for the last 20 years, specializing in the Miami Upper East Side area as well as Miami Beach, Aventura, Hallandale, Homestead, and Hollywood. They bilingual in English and Spanish.
              </p>
            </div>

            <div>
              <p className="text-lg text-stone-700 leading-relaxed">
                Buying a home is one of the biggest decisions you'll ever make and Viviana and Eugenia are here to support you every step of the way.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center bg-[#df1e36] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#c01830] transition-colors"
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Eugenia's photo */}
          <div className="flex justify-center">
            <OptimizedImage
              src="/Eugenia_Headshot.png"
              alt="Eugenia - Real Estate Professional"
              className="w-full max-w-xs rounded-lg shadow-lg"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProducerProfiles;
