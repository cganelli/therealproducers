import React, { useState } from 'react';

const Hero = () => {
  const [leadStatus, setLeadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('form-name', 'lead');
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const resp = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      if (!resp.ok) throw new Error(`Form submit failed: ${resp.status}`);
      form.reset();
      setLeadStatus('success');
    } catch (err) {
      console.error(err);
      setLeadStatus('error');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://ugc.same-assets.com/08XQjqnePzLWmLKJHXGE3GZqA046Zz0P.jpeg"
        >
          <source src="https://videos.pexels.com/video-files/4135118/4135118-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3049371/3049371-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="https://ugc.same-assets.com/08XQjqnePzLWmLKJHXGE3GZqA046Zz0P.jpeg"
            alt="Miami skyline"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <p className="text-lg text-stone-200 mb-4 font-montserrat">Premier Real Estate Team - Miami Dade & Broward Counties</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-syncopate">
              The Real Producers
            </h1>
            <p className="text-xl text-stone-200 mb-8 leading-relaxed font-montserrat">
              Your trusted partners in South Florida real estate. We deliver exceptional results
              throughout Miami Dade and Broward Counties with expertise, dedication, and personalized service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="bg-[#df1e36] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#c01830] transition-colors text-center font-montserrat"
              >
                View Properties
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-stone-800 transition-colors text-center font-montserrat"
              >
                Meet the Team
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-stone-800 mb-2 font-syncopate">Get Started Today</h2>
              <p className="text-stone-600 font-montserrat">Connect with our expert team</p>
            </div>

            <form
              name="lead"
              method="POST"
              action="/"
              data-netlify="true"
              netlify-honeypot="company"
              className="space-y-4"
              onSubmit={handleLeadSubmit}
            >
              <input type="hidden" name="form-name" value="lead" />
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all font-montserrat"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all font-montserrat"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all font-montserrat"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#df1e36] focus:border-transparent transition-all resize-none font-montserrat"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#df1e36] text-white py-3 rounded-md font-semibold hover:bg-[#c01830] transition-colors font-montserrat"
              >
                Send Message
              </button>

              {leadStatus === 'success' && (
                <div className="alert alert-success shadow-sm text-sm" role="status" aria-live="polite">
                  <span>Thank you! We received your message and will respond soon.</span>
                </div>
              )}
              {leadStatus === 'error' && (
                <div className="alert alert-error shadow-sm text-sm" role="alert" aria-live="polite">
                  <span>Submission failed. Please try again.</span>
                </div>
              )}

              <p className="text-xs text-stone-500 text-center font-montserrat">
                By providing your contact information, you consent to receiving marketing communications
                and agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
