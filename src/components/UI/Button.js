



'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({ 
  text, 
  onClick, 
  href, 
  color = 'teal', 
  size = 'md' 
}) {
  const colorClasses = {
    teal: 'bg-teal-500 hover:bg-teal-600',
    coral: 'bg-coral-500 hover:bg-coral-600',
    gray: 'bg-gray-500 hover:bg-gray-600'
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const className = `rounded-md text-white font-medium transition-colors ${colorClasses[color]} ${sizeClasses[size]}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.button
          className={className}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {text}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
}