import React, { useState, useEffect } from 'react';

const DeliveryLocator = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#333' }}
    >
      <h2 className="text-3xl mb-6 font-bold">Delivery Locator</h2>
      {location ? (
        <div className="w-full max-w-3xl">
          <p>Your current location:</p>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
          <div className="mt-4">
            <iframe
              title="Delivery Map"
              width="100%"
              height="450"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCcIAZAD_5UDb3WQ4BZDo-TJnpqkszS9OQ&center=${location.lat},${location.lng}&zoom=14`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
};

export default DeliveryLocator;