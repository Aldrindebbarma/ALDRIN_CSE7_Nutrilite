import React from 'react';

export default function PizzaBuilder() {
  return (
    <section id="pizza" className="py-12 px-6 bg-gray-100 text-black">
      <div className="container mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-green-500 text-center mb-6">Build Your Pizza</h2>
        <p className="text-center text-gray-700 mb-8">
          Create your perfect pizza with your favorite ingredients.
        </p>

        {/* Pizza Image and Description */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6">
          <div className="flex-1">
            <ul className="text-gray-700 space-y-2">
              <li><strong>Base:</strong> Thin crust, thick crust, gluten-free</li>
              <li><strong>Sauce:</strong> Tomato, Alfredo, Pesto</li>
              <li><strong>Toppings:</strong> Pepperoni, Mushrooms, Onions, Sausage, Bacon, Extra Cheese</li>
              <li><strong>Cheese:</strong> Mozzarella, Cheddar, Parmesan</li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              src="../Images/pizza.jpg"
              alt="Custom Pizza"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>

        {/* Popular Desserts Section */}
        <h3 className="text-2xl font-bold text-green-500 text-center mt-12 mb-6">Popular Desserts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src="../Images/chocolate dessert.jpeg"
              alt="Chocolate Dessert"
              className="rounded-lg mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800">Chocolate Dessert with Oatmeal</h4>
            <p className="text-green-500 font-bold">$165</p>
            <button className="mt-2 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src="/Images/pancakes.jpeg"
              alt="Pancakes with Raspberries"
              className="rounded-lg mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800">Pancakes with Raspberries</h4>
            <p className="text-green-500 font-bold">125₽</p>
            <button className="mt-2 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src="/Images/blueberryicecream.jpeg"
              alt="Berry Ice Cream"
              className="rounded-lg mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800">Berry Ice Cream</h4>
            <p className="text-green-500 font-bold">95₽</p>
            <button className="mt-2 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}