import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProperties from './components/FeaturedProperties';
import ProducerProfiles from './components/ProducerProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import PastTransactions from './components/PastTransactions';
import SEO from './components/SEO';
import AgentSchema from './components/AgentSchema';
import Accessibility from './components/Accessibility';

function HomePage() {
  return (
    <>
      <SEO />
      <AgentSchema />
      <Hero />
      <About />
      <FeaturedProperties />
      <ProducerProfiles />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100] focus:px-5 focus:py-3 focus:bg-white focus:text-stone-900 focus:shadow-2xl focus:rounded-full focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[#df1e36] focus:border focus:border-stone-200"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/past-transactions" element={<PastTransactions />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
