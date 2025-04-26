
import React from 'react';

export default function BusinessLunch() {
  return (
    <section id="lunch" className="py-12 px-6 bg-zinc-900 text-white">
      <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">Business Lunch</h2>
      <p className="text-center mb-8">Order before 3:00 PM</p>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <ul className="space-y-2">
          <li><strong>First Course:</strong> Soup, borscht, mushroom cream soup</li>
          <li><strong>Main Course:</strong> Chicken, steak, pasta, rice</li>
          <li><strong>Salads:</strong> Cabbage, Caesar, Avocado</li>
          <li><strong>Drinks:</strong> Coffee, fruit tea, juice</li>
        </ul>
        <img src="/lunch.jpg" alt="Business lunch" className="rounded-lg shadow-md" />
      </div>
    </section>
    
  );
}
