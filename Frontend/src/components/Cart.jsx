import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Cart() {
  const location = useLocation();
  const initialCartItems = location.state?.cartItems || []; // Retrieve cartItems from state
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">₹{item.price} each</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <span className="text-lg font-semibold">
                ₹{item.price * item.quantity}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}