




'use client';
import Button from '../../components/ui/Button.js';
import useCart from '@/context/CartContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CartPage() {
  const { items, removeItem } = useCart();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading mb-8">Your Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Button 
            text="Continue Shopping" 
            href="/products" 
            color="teal" 
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-between py-4 border-b"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      height={80}
                      width={80}
                      src={`/images/${item.image}`} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-teal-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-gray-500 hover:text-coral-500"
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-3 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button 
              text="Proceed to Checkout" 
              href="/checkout" 
              color="gray" 
              size="lg" 
              fullWidth 
            />
          </div>
        </div>
      )}
    </div>
  );
}

