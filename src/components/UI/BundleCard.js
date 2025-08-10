// components/cards/BundleCard.js
'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button.js';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa'; 

export default function BundleCard({
  name,
  discount,
  price,
  items,
  image,
  badge
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          {badge}
        </div>
      )}
      
      {/* Bundle Image */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      
      {/* Bundle Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="bg-teal-100 text-teal-800 text-sm px-2 py-1 rounded">
            {discount}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{price}</p>
        
        <ul className="space-y-1 mb-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              <FaCheck className="w-4 h-4 mr-2 text-teal-500" />
              {item}
            </li>
          ))}
        </ul>
        
        <div className="flex gap-3">
          <Button 
            text="Customize" 
            color="gray" 
            outline 
            className="flex-1"
          />
          <Button 
            text="Add to Cart" 
            color="teal" 
            className="flex-1"
          />
        </div>
      </div>
    </motion.div>
  );
}