import type React from 'react';

const AgentSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Real Producers",
    "legalName": "The Real Producers - Grand Realty of America",
    "url": "https://same-5p4v3hxmn6t-latest.netlify.app",
    "logo": "https://same-5p4v3hxmn6t-latest.netlify.app/Real_Producers_Logo.png",
    "description": "Premier real estate team serving Miami Dade and Broward Counties with expertise in home sales, investment properties, and market analysis.",
    "telephone": "+1-786-423-9413",
    "email": "Viviana@TheRealProducers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13500 W Dixie Hwy, Suite T2",
      "addressLocality": "North Miami Beach",
      "addressRegion": "FL",
      "postalCode": "33180",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.9319",
      "longitude": "-80.1628"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Miami",
        "containedInPlace": "Florida, US"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Miami-Dade County",
        "containedInPlace": "Florida, US"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Broward County",
        "containedInPlace": "Florida, US"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Sales",
            "description": "Expert home selling services with market analysis and strategic marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investment Properties",
            "description": "Real estate investment consultation and property acquisition services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Market Analysis",
            "description": "Comprehensive market research and property valuation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Management",
            "description": "Professional property management and rental services"
          }
        }
      ]
    },
    "member": [
      {
        "@type": "Person",
        "name": "Viviana",
        "jobTitle": "Real Estate Professional",
        "image": "https://same-5p4v3hxmn6t-latest.netlify.app/Viviana_Headshot.png",
        "email": "Viviana@TheRealProducers.com",
        "worksFor": {
          "@type": "Organization",
          "name": "The Real Producers"
        }
      },
      {
        "@type": "Person",
        "name": "Eugenia",
        "jobTitle": "Real Estate Professional",
        "image": "https://same-5p4v3hxmn6t-latest.netlify.app/Eugenia_Headshot.png",
        "worksFor": {
          "@type": "Organization",
          "name": "The Real Producers"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "ratingCount": "150"
    },
    "sameAs": [
      "https://same-5p4v3hxmn6t-latest.netlify.app"
    ]
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is safe and required for SEO
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default AgentSchema;
