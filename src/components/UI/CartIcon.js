

'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useCart from '@/context/CartContext';

export default function CartIcon() {
  const { items } = useCart();
  
  return (
    <Link href="/cart">
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {items.length > 0 && (
          <motion.span 
            className="absolute -top-2 -right-2 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {items.length}
          </motion.span>
        )}
      </motion.div>
    </Link>
  );
}

