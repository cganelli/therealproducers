import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'David & Maria Thompson',
      location: 'Miami Beach, FL',
      content: 'The Real Producers team exceeded every expectation. Their market knowledge and dedication helped us sell our home for 15% above asking price. Sarah was incredibly professional and kept us informed throughout the entire process.',
      rating: 5,
      propertyType: 'Home Sale',
      image: 'https://ugc.same-assets.com/qMthpyvS_gjUrWkkEPZ0Q52WRfr1SQzT.jpeg'
    },
    {
      id: 2,
      name: 'Jennifer Park',
      location: 'Brickell, FL',
      content: 'As a first-time buyer, I was overwhelmed by the process. Michael guided me through every step with patience and expertise. I found my dream apartment and saved thousands thanks to his negotiation skills.',
      rating: 5,
      propertyType: 'First-Time Purchase',
      image: 'https://ugc.same-assets.com/N8dcksfyr3iWaLMpIeRfMohKBW63E7Jh.jpeg'
    },
    {
      id: 3,
      name: 'Robert Chen',
      location: 'Aventura, FL',
      content: 'Working with The Real Producers was the best decision we made. Their investment analysis helped us identify a property that has already appreciated 20% in just two years. Truly exceptional service.',
      rating: 5,
      propertyType: 'Investment Property',
      image: 'https://ugc.same-assets.com/mIikkU2wuc-WhntsdJAWQM8WIwWxYrj_.jpeg'
    },
    {
      id: 4,
      name: 'Lisa & James Rodriguez',
      location: 'Coral Gables, FL',
      content: 'The team helped us navigate a complex relocation from across the country. Jennifer made the entire process seamless and stress-free. We couldn\'t be happier with our new home.',
      rating: 5,
      propertyType: 'Relocation',
      image: 'https://ugc.same-assets.com/g8k8ZdJMAppe-u6ggX7mcjduYmds2771.jpeg'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-600 text-lg font-medium">Client Success Stories</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
            about their experience working with The Real Producers team.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                {Array.from({ length: testimonials[activeTestimonial].rating }, (_, i) => (
                  <svg key={`star-${testimonials[activeTestimonial].name}-${i}`} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-stone-700 leading-relaxed mb-8">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              <div className="border-l-4 border-stone-800 pl-6">
                <h4 className="font-bold text-stone-800 text-lg">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-stone-600">{testimonials[activeTestimonial].location}</p>
                <p className="text-stone-500 text-sm mt-1">
                  {testimonials[activeTestimonial].propertyType}
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={prevTestimonial}
            className="flex items-center px-6 py-3 bg-[#df1e36] text-white rounded-md hover:bg-[#c01830] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={`testimonial-${testimonial.name}-${index}`}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-stone-800' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex items-center px-6 py-3 bg-[#df1e36] text-white rounded-md hover:bg-[#c01830] transition-colors"
          >
            Next
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-stone-800 mb-2">500+</div>
            <div className="text-stone-600">Happy Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-stone-800 mb-2">$2B+</div>
            <div className="text-stone-600">Sales Volume</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-stone-800 mb-2">15+</div>
            <div className="text-stone-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-stone-800 mb-2">98%</div>
            <div className="text-stone-600">Client Satisfaction</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-stone-600 mb-8">
            Ready to join our family of satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-[#df1e36] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#c01830] transition-colors"
          >
            Start Your Journey
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
