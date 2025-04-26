import React from 'react';

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div
        id="header-section"
        className="relative bg-cover bg-center min-h-screen text-white"
        style={{
          backgroundImage: "url('/Images/back.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#000", // Fallback color
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen p-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6">
            Fresh, Hot, and Delicious Food
          </h1>
          <p className="text-lg md:text-2xl text-center mb-8 max-w-3xl">
            Experience the best flavors delivered straight to your door in under 20 minutes. 
            Open daily from 10:00 AM to 7:00 PM. Call us at <span className="font-bold">8-800-100-10-20</span>.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition">
              Order Now
            </button>
            <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition">
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Business Lunch Section */}
      <section className="bg-gray-50 text-gray-800 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
            Business Lunch
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Menu Section */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Menu</h3>
              <ul className="space-y-3 text-xl text-red-600">
                <li>Soup of the Day</li>
                <li>Grilled Vegetables</li>
                <li>Chicken Curry</li>
                <li>Rice or Bread</li>
                <li>Fresh Juice</li>
                <li>Seasonal Salad</li>
                <li>Chocolate Dessert</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="/Images/Services/menu.jpg"
                alt="Business Lunch"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex space-x-4">
            <img
              src="/Images/Services/pic.webp"
              alt="Business Lunch"
              className="rounded-lg shadow-lg w-1/2 h-auto"
            />
            <img
              src="/Images/Services/Image.jpg"
              alt="Additional Business Lunch"
              className="rounded-lg shadow-lg w-1/2 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <img
                src="/Images/Vege.jpg"
                alt="Fresh Ingredients"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We use only the freshest ingredients for our dishes.
              </p>
            </div>
            <div>
              <img
                src="/Images/chef.jpg"
                alt="Chef"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Expert Chefs</h3>
              <p className="text-gray-600">
                Our chefs are highly skilled and experienced.
              </p>
            </div>
            <div>
              <img
                src="/Images/truck.jpg"
                alt="Delivery"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Quick Delivery
              </h3>
              <p className="text-gray-600">
                Get your food delivered in under 20 minutes.
              </p>
            </div>
            <div>
              <img
                src="/Images/custom.png"
                alt="Customizable Orders"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Customizable Orders
              </h3>
              <p className="text-gray-600">
                Customize your meals to suit your taste and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Taste Territory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}