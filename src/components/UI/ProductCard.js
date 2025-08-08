

'use client';
import { motion } from 'framer-motion';
import Button from './Button';
import useCart from '@/context/CartContext';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
    >
      <div className="h-48 bg-gray-100 overflow-hidden">
        <Image
          width={384}
          height={384}
          src={`/images/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-teal-600 font-bold">${product.price.toFixed(2)}</span>
          <Button 
            text="Add to Cart" 
            onClick={() => addItem(product)} 
            color="teal"
            size="sm"
          />
        </div>
      </div>
    </motion.div>
  );
}

