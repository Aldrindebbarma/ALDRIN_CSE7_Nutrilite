import React, { useState, useEffect } from 'react';

export default function AboutPreparation() {
  const images = [
    { src: '/Images/Food/Salad.jpg', alt: 'Farm to Table' },
    { src: '/Images/Food/Rice.jpg', alt: 'Rice Paddy' },
    { src: '/Images/Food/Market.jpg', alt: 'Market' },
    { src: '/Images/Food/Pizza Base.jpg', alt: 'Pizza Base' },
    { src: '/Images/Food/Pasta.jpg', alt: 'To the Table' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Static Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/Images/Food/Farm.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className="relative text-6xl font-bold uppercase tracking-wide text-center">
          The Farm
        </h1>
      </div>

      {/* Slideshow Section */}
      <div
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-6xl font-bold text-center uppercase tracking-wide">
          {images[currentImageIndex].alt}
        </h1>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12 leading-relaxed">
          Clean eating can be simple, yet nourishing. A mindful approach that enhances traditional recipes with healthier options.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Nutrilite. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed with care and passion for healthy living.
          </p>
        </div>
      </footer>
    </div>
  );
}
