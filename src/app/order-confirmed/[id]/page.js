


'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function OrderConfirmed({ params }) {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-heading mb-4">Order Confirmed!</h1>
        <p className="text-lg mb-6">
          Thank you for your purchase. Your order #{params.id} has been received.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg inline-block mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {/* Order details would go here */}
          <div className="font-bold text-lg pt-3 border-t">
            Total: $129.98
          </div>
        </div>
        <Button 
          text="Continue Shopping" 
          href="/products" 
          color="teal" 
          size="lg" 
        />
      </motion.div>
    </div>
  );
}