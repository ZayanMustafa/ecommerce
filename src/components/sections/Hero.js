

'use client';
import { motion } from 'framer-motion';
import Button from '../ui/Button.js';

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-teal-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover opacity-20"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-heading text-white mb-4">
            Smart Tech, <span className="text-coral-300">Greener Future</span>
          </h1>
          <p className="text-xl text-white mb-8">
            Discover eco-friendly gadgets that reduce your carbon footprint without sacrificing style or functionality.
          </p>
          <Button 
            text="Shop Now" 
            href="/products" 
            color="coral" 
            size="lg" 
          />
        </motion.div>
      </div>
    </section>
  );
}

