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
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/past-transactions" element={<PastTransactions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
