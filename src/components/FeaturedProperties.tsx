import React from 'react';
import OptimizedImage from './OptimizedImage';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: '/11858_Homestead.png',
      address: '11858 SW 246th Ln',
      city: 'Homestead, FL 33032',
      price: '$2,650/mo',
      beds: 3,
      baths: 3,
      sqft: '1,330',
      type: 'Townhouse for Rent',
      link: 'https://portal.onehome.com/en-US/property/aotf~1113153634~SEFMIAMI?token=eyJPU04iOiJTRUZNSUFNSSIsImFnZW50aWQiOiIyNDU4MCIsInNldGlkIjogIjI3Nzc4NjIiLCJzZXRUeXBlIjogIlBST1BFUlRZIiwic2F2ZWRTZWFyY2hJZCI6ICIwMzNhNDMwZi1jY2I3LTM2ZTItODc0Mi1jNTdlMWJjZGRjNmIiLCJlbWFpbCI6ICIiLCAiVmlld01vZGUiOiAiMyJ9&searchId=033a430f-ccb7-36e2-8742-c57e1bcddc6b'
    },
    {
      id: 2,
      image: '/12418_north_miami.png',
      address: '12418 NE 4th Ave',
      city: 'North Miami, FL 33161',
      price: '$860,000',
      beds: 3,
      baths: 2,
      sqft: '2,020',
      type: 'Single Family Home',
      link: 'https://portal.onehome.com/en-US/properties/map?token=eyJPU04iOiJTRUZNSUFNSSIsImFnZW50aWQiOiIyNDU4MCIsInNldGlkIjogIjI3Nzc4NjgiLCJzZXRUeXBlIjogIlBST1BFUlRZIiwic2F2ZWRTZWFyY2hJZCI6ICIwMWUwODM4Ni1hYWQ1LTNmNTUtOWFkZS00YTY0OGM5OGZjZjMiLCJlbWFpbCI6ICIiLCAiVmlld01vZGUiOiAiMyJ9&searchId=01e08386-aad5-3f55-9ade-4a648c98fcf3'
    },
    {
      id: 3,
      image: '/27910_Homestead.png',
      address: '27910 SW 162nd Ave',
      city: 'Homestead, FL 33031',
      price: '$725,000',
      beds: 3,
      baths: 3,
      sqft: '1,482',
      type: 'Single Family Home',
      link: 'https://portal.onehome.com/en-US/properties/map?token=eyJPU04iOiJTRUZNSUFNSSIsImFnZW50aWQiOiIyNDU4MCIsInNldGlkIjogIjI3Nzc4NzUiLCJzZXRUeXBlIjogIlBST1BFUlRZIiwic2F2ZWRTZWFyY2hJZCI6ICI3OGY1MjhkNy0zM2M1LTMwNjQtOWZiMy03YzY1ZDAwYmIyNjIiLCJlbWFpbCI6ICIiLCAiVmlld01vZGUiOiAiMyJ9&searchId=78f528d7-33c5-3064-9fb3-7c65d00bb262'
    }
  ];

  return (
    <section id="properties" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-600 text-lg font-medium">Featured Properties</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-6">
            Exclusive Listings, Tailored to You
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover exceptional properties curated by our team of experts.
            Each listing represents the pinnacle of quality and value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={property.image}
                  alt={`${property.type} for ${property.price} at ${property.address}, ${property.city} - ${property.beds} beds, ${property.baths} baths, ${property.sqft} sqft`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={256}
                />
                <div className="absolute top-4 left-4 bg-stone-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.type}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-stone-800 mb-1">{property.address}</h3>
                  <p className="text-stone-600">{property.city}</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-stone-800">{property.price}</span>
                </div>

                <div className="flex justify-between text-stone-600 text-sm mb-6">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {property.baths} Baths
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.sqft} sqft
                  </span>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={property.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#df1e36] text-white py-2 px-4 rounded-md hover:bg-[#c01830] transition-colors font-medium text-center"
                  >
                    View Details
                  </a>
                  <button className="px-4 py-2 border border-stone-300 rounded-md hover:bg-stone-50 transition-colors">
                    <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-properties"
            className="inline-flex items-center bg-[#df1e36] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#c01830] transition-colors"
          >
            View All Properties
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
