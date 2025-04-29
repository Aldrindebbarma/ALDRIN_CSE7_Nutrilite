import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const baseURL = import.meta.env.BASE_URL;

  const menuItems = [
    { id: 51, name: 'Quinoa Salad', price: 180, image: `${baseURL}Images/Menu/Quinoa Salad.jpg` },
    { id: 52, name: 'Grilled Chicken Salad', price: 220, image: `${baseURL}Images/Menu/Grilled Chicken Salad.jpg` },
    { id: 53, name: 'Avocado Toast', price: 150, image: `${baseURL}Images/Menu/Avocado Toast.jpg` },
    { id: 54, name: 'Greek Yogurt Bowl', price: 120, image: `${baseURL}Images/Menu/Greek Yogurt Bowl.jpg` },
    { id: 55, name: 'Oats Porridge', price: 100, image: `${baseURL}Images/Menu/Oats Porridge.jpg` },
    { id: 56, name: 'Grilled Salmon', price: 300, image: `${baseURL}Images/Menu/Grilled Salmon.jpg` },
    { id: 57, name: 'Zucchini Noodles', price: 200, image: `${baseURL}Images/Menu/Zucchini Noodles.jpg` },
    { id: 58, name: 'Spinach Smoothie', price: 140, image: `${baseURL}Images/Menu/Spinach Smoothie.jpg` },
    { id: 59, name: 'Chickpea Salad', price: 160, image: `${baseURL}Images/Menu/Chickpea Salad.jpg` },
    { id: 60, name: 'Stuffed Bell Peppers', price: 180, image: `${baseURL}Images/Menu/Stuffed Bell Peppers.jpg` },
    { id: 61, name: 'Lentil Soup', price: 120, image: `${baseURL}Images/Menu/Lentil Soup.jpg` },
    { id: 62, name: 'Grilled Asparagus', price: 150, image: `${baseURL}Images/Menu/Grilled Asparagus.jpg` },
    { id: 64, name: 'Brown Rice Bowl', price: 200, image: `${baseURL}Images/Menu/Brown Rice Bowl.jpg` },
    { id: 65, name: 'Vegetable Stir Fry', price: 180, image: `${baseURL}Images/Menu/Vegetable Stir Fry.jpg` },
    { id: 66, name: 'Hummus with Veggies', price: 120, image: `${baseURL}Images/Menu/Hummus With Veggies.jpg` },
    { id: 67, name: 'Sweet Potato Fries', price: 140, image: `${baseURL}Images/Menu/Sweet Potato Fries.jpg` },
    { id: 68, name: 'Berry Smoothie Bowl', price: 160, image: `${baseURL}Images/Menu/Berry Smoothie Bowl.jpg` },
    { id: 69, name: 'Grilled Tofu', price: 200, image: `${baseURL}Images/Menu/Grilled Tofu.jpg` },
    { id: 70, name: 'Cucumber Mint Cooler', price: 90, image: `${baseURL}Images/Menu/Cucumber Mint Cooler.jpg` },
  ];

  const handleAddToCart = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    if (!cartItems.some((cartItem) => cartItem.id === item.id)) {
      updatedCartItems.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCartItems);

    // Navigate to the cart with updated items
    navigate('/cart', { state: { cartItems: updatedCartItems } });
  };

  return (
    <div id="services" className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Our Menu</h1>

      <section className="bg-white shadow-md rounded p-6 mb-8">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Menu</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="text-center border rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded mb-4"
              />
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-green-600 font-bold">₹{item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-2 bg-green-500 text-white text-sm font-bold py-1 px-3 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}