import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const Services = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service inquiry submitted:', formData);
    // Handle form submission logic here
  };

  const services = [
    {
      id: 1,
      title: 'Home Sales',
      description: 'Selling a home is one of the most important financial decisions you\'ll make. Our expert real estate team helps you navigate every step of the home selling process—from listing and marketing to negotiating top-dollar offers and closing the deal. We specialize in fast home sales, luxury listings, and maximizing your property\'s market value.',
      image: 'https://ugc.same-assets.com/8qHLUAdXdoVlvdiwrAiPpdcEVSeCFZQd.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Investment Properties',
      description: 'Real estate investing is a powerful way to build wealth. We help you find high-ROI investment properties, including turnkey rentals, vacation homes, and multifamily units. Whether you\'re a first-time investor or building a portfolio, we offer property investment strategies that drive long-term passive income and equity growth.',
      image: 'https://ugc.same-assets.com/LxAGCdkvQp9Bt7l8avRIvcejhbKxh2N0.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Market Analysis',
      description: 'Our in-depth real estate market analysis gives you a competitive edge when buying or selling property. Using local housing data, neighborhood trends, and price comparisons, we provide accurate property valuations and strategic insights. Stay ahead of market shifts with expert real estate insights that help you make smarter decisions.',
      image: '/market-analysis-chart.png',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Property Management',
      description: 'We provide stress-free, full-service property management for landlords and real estate investors. From tenant screening and rent collection to maintenance and legal compliance, our team protects your investment and boosts profitability. Get peace of mind with top-rated property management services tailored to your goals.',
      image: 'https://ugc.same-assets.com/snURt1QQDkCJ_JKjwEz7x5fw3MY7FkHO.webp',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m5 0V9h3v12M7 21h2m3-18h3v4l-3-1V3z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Relocation Services',
      description: 'Moving to a new city? Our real estate relocation services make your transition smooth and stress-free. We assist with home searches, neighborhood tours, school information, and all the details that matter most. Perfect for corporate relocations, long-distance moves, and families seeking expert relocation support.',
      image: 'https://ugc.same-assets.com/Q2YkONleGWf6qcb3ykwqMut_z8w4bAUr.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Commercial Real Estate',
      description: 'Finding the right space is critical for business success. Our commercial real estate services cover office leasing, retail locations, industrial properties, and commercial investments. We help entrepreneurs, franchises, and investors find high-visibility properties that drive traffic, revenue, and long-term value.',
      image: 'https://ugc.same-assets.com/leJtkNroVIiVJSKhDGAhPINlERptSvI3.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m5 0V9h3v12M7 21h2m3-18h3v4l-3-1V3z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <SEO
        title="Real Estate Services Miami | The Real Producers - Home Sales & Investment Properties"
        description="Comprehensive real estate services in Miami & Broward Counties. Expert home sales, investment properties, market analysis, property management, relocation services & commercial real estate."
        keywords="real estate services Miami, home sales Miami, investment properties Florida, property management Broward County, market analysis South Florida, relocation services Miami"
        url="https://same-5p4v3hxmn6t-latest.netlify.app/services"
      />
      <div className="min-h-screen bg-stone-50 pt-20">
      {/* Header Section */}
      <section id="services" className="bg-gradient-to-r from-stone-800 to-stone-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-syncopate mb-6">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl text-stone-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive real estate solutions tailored to your unique needs. From first-time buyers to seasoned investors, we deliver results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#df1e36] text-white rounded-lg">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 font-syncopate">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4">
                    <a
                      href="#contact-form"
                      className="inline-flex items-center bg-[#df1e36] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#c01830] transition-colors"
                    >
                      Get Started
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 font-syncopate mb-6">
              Request a Consultation
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Ready to get started with one of our services? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-stone-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all bg-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all bg-white"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all bg-white"
                >
                  <option value="">Service of Interest*</option>
                  <option value="home-sales">Home Sales</option>
                  <option value="investment-properties">Investment Properties</option>
                  <option value="market-analysis">Market Analysis</option>
                  <option value="property-management">Property Management</option>
                  <option value="relocation-services">Relocation Services</option>
                  <option value="commercial-real-estate">Commercial Real Estate</option>
                  <option value="multiple-services">Multiple Services</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your specific needs and how we can help you..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all resize-none bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#df1e36] text-white py-4 rounded-md font-semibold hover:bg-[#c01830] transition-colors text-lg"
              >
                Request Consultation
              </button>

              <p className="text-xs text-stone-500 text-center">
                By submitting this form, you consent to receiving communications from The Real Producers
                and agree to our privacy policy. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-stone-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-syncopate mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-stone-200 mb-8 leading-relaxed">
            Contact us today to discuss your real estate needs and discover how our expert team can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center bg-[#df1e36] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#c01830] transition-colors"
            >
              Contact Us Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17864239413"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-stone-800 transition-colors"
            >
              (786) 423-9413
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;
