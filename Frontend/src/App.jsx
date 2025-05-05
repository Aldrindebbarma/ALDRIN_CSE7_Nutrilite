import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/Home';
import ContactUs from './components/ContactUs';
import PizzaBuilder from './components/PizzaBuilder';
import Services from './components/Services';
import Cart from './components/Cart';
import AboutPreparation from './components/AboutPreparation';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import DeliveryLocator from './components/DeliveryLocator';

function App() {
  return (
    <Router>
      <div className="bg-zinc-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pizza" element={<PizzaBuilder />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about-preparation" element={<AboutPreparation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/delivery-locator" element={<DeliveryLocator />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;