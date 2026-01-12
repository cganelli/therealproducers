import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4 font-syncopate">The Real Producers</div>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Your trusted partners in South Florida real estate. We deliver exceptional results
              throughout Miami Dade and Broward Counties with expertise, dedication, and personalized service.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="/#properties" className="text-stone-300 hover:text-white transition-colors">Properties</a></li>
              <li><a href="/#producers" className="text-stone-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/#contact" className="text-stone-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/accessibility" className="text-stone-300 hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="text-stone-300 hover:text-white transition-colors text-left">Home Sales</a></li>
              <li><a href="/services" className="text-stone-300 hover:text-white transition-colors text-left">Investment Properties</a></li>
              <li><a href="/services" className="text-stone-300 hover:text-white transition-colors text-left">Market Analysis</a></li>
              <li><a href="/services" className="text-stone-300 hover:text-white transition-colors text-left">Property Management</a></li>
              <li><a href="/services" className="text-stone-300 hover:text-white transition-colors text-left">Relocation Services</a></li>
              <li><a href="/services" className="text-stone-300 hover:text-white transition-colors text-left">Commercial Real Estate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-stone-300">
                  13500 W Dixie Hwy, Suite T2<br />
                  North Miami Beach, FL, 33180
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-stone-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+17864239413" className="text-stone-300 hover:text-white transition-colors">
                  (786) 423-9413
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-stone-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Viviana@TheRealProducers.com" className="text-stone-300 hover:text-white transition-colors">
                  Viviana@TheRealProducers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8">
          <div className="flex flex-col items-center">
            <div className="text-stone-400 text-sm">
              © {currentYear} The Real Producers. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
