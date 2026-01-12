import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isMobilePropertiesOpen, setIsMobilePropertiesOpen] = useState(false);
  const propertiesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (propertiesRef.current && !propertiesRef.current.contains(event.target as Node)) {
        setIsPropertiesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <OptimizedImage
              src="/Real_Producers_Logo.png"
              alt="The Real Producers Logo"
              className="h-8 mr-3"
              width={32}
              height={32}
              priority={true}
            />
            <div className="text-2xl font-bold text-stone-800 tracking-tight font-syncopate">
              The Real Producers
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group" ref={propertiesRef}>
              <button
                className="text-stone-700 hover:text-stone-900 flex items-center transition-colors"
                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                onMouseEnter={() => setIsPropertiesOpen(true)}
              >
                Properties
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isPropertiesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                  onMouseLeave={() => setTimeout(() => setIsPropertiesOpen(false), 200)}
                >
                  <button
                    onClick={() => {
                      navigateToSection('properties');
                      setIsPropertiesOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-stone-700 hover:bg-stone-50 transition-colors"
                  >
                    Featured Properties
                  </button>
                  <Link to="/past-transactions" className="block px-4 py-2 text-stone-700 hover:bg-stone-50 transition-colors">Past Transactions</Link>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateToSection('producers')}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              Producers
            </button>
            <Link to="/services" className="text-stone-700 hover:text-stone-900 transition-colors">Services</Link>
            <Link to="/accessibility" className="text-stone-700 hover:text-stone-900 transition-colors">Accessibility</Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+17864239413"
              className="text-stone-700 hover:text-stone-900 font-medium transition-colors whitespace-nowrap"
            >
              (786) 423-9413
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Properties Dropdown */}
              <div className="relative">
                <button
                  className="text-stone-700 hover:text-stone-900 transition-colors flex items-center justify-between w-full"
                  onClick={() => setIsMobilePropertiesOpen(!isMobilePropertiesOpen)}
                >
                  Properties
                  <svg
                    className={`ml-1 w-4 h-4 transform transition-transform ${isMobilePropertiesOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {isMobilePropertiesOpen && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <button
                      onClick={() => {
                        navigateToSection('properties');
                        setIsMobilePropertiesOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className="text-left text-stone-600 hover:text-stone-900 transition-colors text-sm"
                    >
                      Featured Properties
                    </button>
                    <Link to="/past-transactions" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">Past Transactions</Link>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  navigateToSection('producers');
                  setIsMenuOpen(false);
                }}
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Producers
              </button>
              <Link to="/services" className="text-stone-700 hover:text-stone-900 transition-colors">Services</Link>
              <Link to="/accessibility" className="text-stone-700 hover:text-stone-900 transition-colors">Accessibility</Link>
              <a href="tel:+17864239413" className="text-stone-700 hover:text-stone-900 font-medium transition-colors text-center">(786) 423-9413</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
