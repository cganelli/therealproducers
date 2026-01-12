import React from 'react';
import OptimizedImage from './OptimizedImage';
import SEO from './SEO';

interface Property {
  id: number;
  image: string;
  address: string;
  zillowUrl: string;
}

const properties: Property[] = [
  {
    id: 1,
    image: '/Compressed_650_Miami.png',
    address: '650 NE 64th St APT 609, Miami, FL 33138',
    zillowUrl: 'https://www.zillow.com/homedetails/650-NE-64th-St-APT-609-Miami-FL-33138/64538328_zpid/?'
  },
  {
    id: 2,
    image: '/Compressed_1755_North_Miami.png',
    address: '1755 Venice Ln APT 9W, North Miami, FL 33181',
    zillowUrl: 'https://www.zillow.com/homedetails/1755-Venice-Ln-APT-9W-North-Miami-FL-33181/43981506_zpid/'
  },
  {
    id: 3,
    image: '/Compressed_14290_Miami.png',
    address: '14290 SW 73rd St, Miami, FL 33183',
    zillowUrl: 'https://www.zillow.com/homedetails/14290-SW-73rd-St-Miami-FL-33183/44269958_zpid/'
  },
  {
    id: 4,
    image: '/8961_Pembroke_Pines.png',
    address: '8961 NW 7th Ct, Pembroke Pines, FL 33024',
    zillowUrl: 'https://www.zillow.com/homedetails/8961-NW-7th-Ct-Pembroke-Pines-FL-33024/43290219_zpid/'
  },
  {
    id: 5,
    image: '/100_Sunny_Isles_Beach.png',
    address: '100 Bayview Dr UNIT 1116, Sunny Isles Beach, FL 33160',
    zillowUrl: 'https://www.zillow.com/homedetails/100-Bayview-Dr-UNIT-1116-Sunny-Isles-Beach-FL-33160/44386993_zpid/'
  },
  {
    id: 6,
    image: '/1600_Miami.png',
    address: '1600 NE 1st Ave APT 3416, Miami, FL 33132',
    zillowUrl: 'https://www.zillow.com/homedetails/1600-NE-1st-Ave-APT-3416-Miami-FL-33132/308905575_zpid/'
  },
  {
    id: 7,
    image: '/1750_Miami.png',
    address: '1750 NE 115th St APT 106, Miami, FL 33181',
    zillowUrl: 'https://www.zillow.com/homedetails/1750-NE-115th-St-APT-106-Miami-FL-33181/44137305_zpid/'
  },
  {
    id: 8,
    image: '/Compressed_1050_Miami_Shores.png',
    address: '1050 NE 107th St, Miami Shores, FL 33161',
    zillowUrl: 'https://www.zillow.com/homedetails/1050-NE-107th-St-Miami-Shores-FL-33161/44007390_zpid/'
  }
];

const PastTransactions = () => {
  return (
    <>
      <SEO
        title="Past Real Estate Transactions Miami | The Real Producers Success Stories"
        description="View our successful real estate transactions in Miami & Broward Counties. Browse sold properties and see why clients trust The Real Producers for their home sales and purchases."
        keywords="past transactions Miami, sold properties Miami, real estate success stories, Miami home sales, Broward County real estate transactions, property sales history"
        url="https://same-5p4v3hxmn6t-latest.netlify.app/past-transactions"
      />
      <div className="pt-20 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Past Transactions
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Take a look at our successful property transactions. Each property represents our commitment to excellence and client satisfaction.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <a
                href={property.zillowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <OptimizedImage
                    src={property.image}
                    alt={`Sold property at ${property.address} - Successful real estate transaction by The Real Producers in Miami`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    width={300}
                    height={192}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">
                    {property.address}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
                      Sold
                    </span>
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                      View on Zillow →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-4">
              Ready to Make Your Property Transaction a Success?
            </h2>
            <p className="text-stone-600 mb-6">
              Contact us today to discuss how we can help you achieve your real estate goals.
            </p>
            <a
              href="tel:+17864239413"
              className="inline-block bg-stone-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-stone-700 transition-colors"
            >
              Call (786) 423-9413
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PastTransactions;
