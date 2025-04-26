import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Cart() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // Retrieve cartItems from state

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span className="text-lg font-semibold">{item.name}</span>
              <span className="text-lg font-semibold">₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}