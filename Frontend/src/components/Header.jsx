import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('header-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-black text-white shadow-md">
      <h1 className="text-xl font-bold text-green-500">TASTE TERRITORY</h1>
      <nav className="space-x-6">
        <button onClick={handleHomeClick} className="hover:text-green-500">
          Home
        </button>
        <Link to="/contact" className="hover:text-green-500">Contact Us</Link>
        <Link to="/about-preparation" className="hover:text-green-500">About Preparation</Link> {/* New Link */}
        <Link to="/login" className="hover:text-green-500">Login</Link> {/* Added Login Link */}
      </nav>
    </header>
  );
}