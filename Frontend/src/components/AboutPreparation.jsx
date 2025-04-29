import React, { useState, useEffect } from 'react';

export default function AboutPreparation() {
  const images = [
    { src: '/Images/Food/Salad.jpg', alt: 'Farm to Table' },
    { src: '/Images/Food/Rice.jpg', alt: 'Rice Paddy' },
    { src: '/Images/Food/Market.jpg', alt: 'Haat Bazar Main' },
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
        style={{
          backgroundImage: "url('/Images/Food/Farm.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className="relative text-6xl font-bold uppercase tracking-wide text-center">
          The Farm
        </h1>
      </div>

      {/* Slideshow Section */}
      <div
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex].src})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-6xl font-bold text-center uppercase tracking-wide">
          {images[currentImageIndex].alt}
        </h1>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12 leading-relaxed">
          Haat Bazar, the heart of Kalimpong, offers local seasonal produce year-round, reflecting the region's rich harvest and cultural harmony.
        </p>
      </div>

      {/* Food Preparation Images */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-12 uppercase">
          Food Preparation in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[500px] object-cover"
              />
              <p className="text-center text-gray-700 font-medium mt-4">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
