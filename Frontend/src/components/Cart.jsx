import React, { useState, useEffect } from 'react';
import { getCartItems, updateCartItem } from '../services/cartService';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const passedCartItems = location.state?.cartItems || [];
  const [cartItems, setCartItems] = useState(passedCartItems);

  // Fetch the cart items from the backend
  const fetchCart = async () => {
    try {
      const items = await getCartItems();
      console.log('Fetched cart items:', items);
      setCartItems(items);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    // If no items were passed, fetch from backend
    if (cartItems.length === 0) {
      fetchCart();
    }
  }, []);

  // Optimistically update the quantity and adjust backend
  const handleIncrement = async (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + 1;
      // Update UI immediately
      setCartItems((prev) =>
        prev.map((it) => (it.id === id ? { ...it, quantity: newQuantity } : it))
      );
      console.log(`Incrementing item id ${id} from ${item.quantity} to ${newQuantity}`);
      try {
        await updateCartItem(id, newQuantity);
      } catch (error) {
        console.error('Error updating cart item (increment):', error);
        // Optionally re-fetch in case of error
        fetchCart();
      }
    }
  };

  // Optimistically decrease quantity (or remove item if quantity goes to 0)
  const handleDecrement = async (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      let newQuantity;
      if (item.quantity > 1) {
        newQuantity = item.quantity - 1;
        console.log(`Decrementing item id ${id} from ${item.quantity} to ${newQuantity}`);
      } else {
        newQuantity = 0;
        console.log(`Removing item id ${id} as quantity goes to 0`);
      }
      // Update UI immediately (filtering out items with 0 quantity)
      setCartItems((prev) =>
        prev
          .map((it) => (it.id === id ? { ...it, quantity: newQuantity } : it))
          .filter((it) => it.quantity > 0)
      );
      try {
        await updateCartItem(id, newQuantity);
      } catch (error) {
        console.error('Error updating cart item (decrement):', error);
        fetchCart();
      }
    }
  };

  // Calculate the total cost dynamically
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Pass both cartItems and the total cost to the Payment page.
  const handleCheckout = () => {
    navigate('/payment', { state: { cartItems, total: totalCost } });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-2xl text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center py-6"
              >
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-gray-800">{item.name}</p>
                  <p className="text-lg text-gray-600">Price: ₹{item.price}</p>
                </div>
                <div className="flex items-center mt-4 sm:mt-0 space-x-4">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 text-white text-xl"
                  >
                    –
                  </button>
                  <span className="text-2xl font-semibold text-indigo-600">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full hover:bg-green-600 text-white text-xl"
                  >
                    +
                  </button>
                </div>
                <div className="mt-4 sm:mt-0">
                  <p className="text-2xl font-bold text-gray-800">₹{item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-10">
            <p className="text-3xl font-bold text-gray-700">Total: ₹{totalCost}</p>
            <button
              onClick={handleCheckout}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl rounded-lg shadow"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}