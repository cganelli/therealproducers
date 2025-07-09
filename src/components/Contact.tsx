import type React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    timeline: '',
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
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-600 text-lg font-medium">Contact Us</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ready to begin your real estate journey? Get in touch with our expert team
            and let us help you achieve your property goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-stone-800 mb-8">Get in Touch</h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-2">Office Location</h4>
                  <p className="text-stone-600">
                    13500 W Dixie Hwy, Suite T2<br />
                    North Miami Beach, FL, 33180<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-2">Phone</h4>
                  <p className="text-stone-600">
                    <a href="tel:+17864239413" className="hover:text-stone-800 transition-colors">
                      (786) 423-9413
                    </a>
                  </p>
                  <p className="text-stone-500 text-sm mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-2">Email</h4>
                  <p className="text-stone-600">
                    <a href="mailto:Viviana@TheRealProducers.com" className="hover:text-stone-800 transition-colors">
                      Viviana@TheRealProducers.com
                    </a>
                  </p>
                  <p className="text-stone-500 text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-2">Office Hours</h4>
                  <p className="text-stone-600">
                    Monday - Friday: 8:00 AM - 8:00 PM<br />
                    Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div className="bg-stone-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">Send us a Message</h3>

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

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Property Type*</option>
                    <option value="buying">Buying</option>
                    <option value="selling">Selling</option>
                    <option value="renting">Renting</option>
                    <option value="investing">Investment</option>
                  </select>
                </div>
                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Budget Range</option>
                    <option value="under-500k">Under $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-2m">$1M - $2M</option>
                    <option value="2m-5m">$2M - $5M</option>
                    <option value="over-5m">Over $5M</option>
                  </select>
                </div>
              </div>

              <div>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all bg-white"
                >
                  <option value="">Timeline</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-3-months">1-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                  <option value="6-12-months">6-12 Months</option>
                  <option value="over-year">Over a Year</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us more about your real estate needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all resize-none bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#df1e36] text-white py-3 rounded-md font-semibold hover:bg-[#c01830] transition-colors font-montserrat"
              >
                Send Message
              </button>

              <p className="text-xs text-stone-500 text-center">
                By submitting this form, you consent to receiving marketing communications
                and agree to our privacy policy. Message and data rates may apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
