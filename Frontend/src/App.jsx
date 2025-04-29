import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/Home'; // Home page component
import ContactUs from './components/ContactUs';
import PizzaBuilder from './components/PizzaBuilder';
import Services from './components/Services';
import Cart from './components/Cart';
import AboutPreparation from './components/AboutPreparation';

function App() {
  return (
    <Router>
      <div className="bg-zinc-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} /> {/* Set HeroSection as the home page */}
            <Route path="/services" element={<Services />} />
            <Route path="/pizza" element={<PizzaBuilder />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about-preparation" element={<AboutPreparation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;