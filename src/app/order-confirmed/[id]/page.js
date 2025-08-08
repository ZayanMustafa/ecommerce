import Link from 'next/link';
import React from 'react';

export default async function OrderConfirmed({ params }) {
  // Properly unwrap params with await
  const { id } = params;

  // Mock order data - replace with your actual data fetching
  const order = {
    id,
    total: 129.98,
    items: [
      { name: 'Solar Charger', price: 49.99, quantity: 1 },
      { name: 'Bamboo Speaker', price: 79.99, quantity: 1 }
    ],
    date: new Date().toLocaleDateString()
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-teal-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">Your order #{order.id} has been received.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="divide-y divide-gray-200">
          {order.items.map((item, index) => (
            <div key={index} className="py-3 flex justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">We&apos;ve sent a confirmation to your email.</p>
        <Link
          href="/products" 
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}