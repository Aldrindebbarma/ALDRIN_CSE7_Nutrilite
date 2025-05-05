import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const navigate = useNavigate();

  return (
    <div
      className="p-6 min-h-screen"
      style={{ 
        backgroundImage: "url('/Images/cback.webp')", // Update with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white p-6 shadow-md rounded">
        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
      <div className="text-center mt-6">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400"
        >
          Back to Home
        </button>
      </div>
      {/* Contact Info Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div>
            <p className="text-lg text-gray-700">Instagram:</p>
            <a
              href="https://instagram.com/YourInstaHandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline"
            >
              Follow us on Instagram
            </a>
          </div>
          <div>
            <p className="text-lg text-gray-700">Email:</p>
            <a
              href="mailto:contact@nutrilite.com"
              className="text-blue-500 font-bold hover:underline"
            >
              contact@nutrilite.com
            </a>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Our Location</h3>
          <div className="w-full h-64">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195190973604!2d-122.42177868468121!3d37.77492977975905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb5cb8fd%3A0xc3a9ad6fad1189a1!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1623179007328!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}