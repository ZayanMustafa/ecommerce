


'use client';
import Link from 'next/link';
import CartIcon from './CartIcon';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.h1 
            className="text-2xl font-heading text-teal-600"
            whileHover={{ scale: 1.05 }}
          >
            EcoGadget
          </motion.h1>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/products" className="hover:text-teal-600 transition">Shop</Link>
          <CartIcon />
        </nav>
      </div>
    </header>
  );
}

