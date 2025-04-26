
import React from 'react';

export default function EventCalendar() {
  return (
    <section id="events" className="py-12 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">Upcoming Events</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-4xl mx-auto">
        <div className="bg-zinc-800 p-4 rounded-lg w-full">
          <h3 className="font-semibold text-xl">Kids Masterclass</h3>
          <p className="text-sm text-gray-300">10:00 AM - Learn how to cook fun meals!</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg w-full">
          <h3 className="font-semibold text-xl">Jazz Concert</h3>
          <p className="text-sm text-gray-300">18:00 PM - Enjoy food with live music.</p>
        </div>
      </div>
    </section>
  );
}
