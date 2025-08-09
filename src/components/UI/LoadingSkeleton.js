



'use client';
import { motion } from 'framer-motion';

export default function LoadingSkeleton({ type }) {
  // Base animation for all skeletons
  const pulseAnimation = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
    transition: { 
      repeat: Infinity, 
      repeatType: 'reverse', 
      duration: 1.5 
    }
  };

  const skeletons = {
    // Hero Section Skeleton
    hero: (
      <motion.div {...pulseAnimation} className="relative h-[80vh] min-h-[600px]">
        <div className="absolute inset-0 bg-gray-100 rounded-xl">
          <div className="container mx-auto h-full flex items-center px-6">
            <div className="max-w-2xl space-y-6">
              <div className="h-12 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-full"></div>
              <div className="h-6 bg-gray-200 rounded w-5/6"></div>
              <div className="flex gap-4 pt-4">
                <div className="h-12 bg-gray-200 rounded-lg w-32"></div>
                <div className="h-12 bg-gray-200 rounded-lg w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ),

    // Product Grid Skeleton
    grid: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            {...pulseAnimation}
            className="border rounded-lg overflow-hidden"
          >
            <div className="h-48 bg-gray-100"></div>
            <div className="p-4 space-y-3">
              <div className="h-5 bg-gray-200 rounded w-4/5"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-8 bg-gray-200 rounded w-20"></div>
            </div>
          </motion.div>
        ))}
      </div>
    ),

    // Testimonials Skeleton
    testimonials: (
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i}
            {...pulseAnimation}
            className="bg-white p-6 rounded-xl h-full"
          >
            <div className="h-4 bg-gray-200 rounded w-12 mb-6"></div>
            <div className="space-y-3 mb-6">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),

    // Eco Quiz Skeleton
    quiz: (
      <motion.div {...pulseAnimation} className="bg-white p-8 rounded-xl">
        <div className="h-3 bg-gray-200 rounded w-1/4 mb-8"></div>
        <div className="h-2 bg-gray-100 rounded-full mb-8">
          <div className="h-full bg-gray-200 rounded-full w-1/3"></div>
        </div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-200 rounded-lg"></div>
          <div className="h-12 bg-gray-200 rounded-lg"></div>
          <div className="h-12 bg-gray-200 rounded-lg"></div>
        </div>
      </motion.div>
    ),

    // Impact Dashboard Skeleton
    dashboard: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            {...pulseAnimation}
            className="bg-white p-8 rounded-xl text-center"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </motion.div>
        ))}
      </div>
    ),

    // Product Bundles Skeleton
    bundles: (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            {...pulseAnimation}
            className="border rounded-xl overflow-hidden"
          >
            <div className="h-48 bg-gray-100"></div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
                <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  };

  return skeletons[type] || (
    <motion.div 
      {...pulseAnimation}
      className="h-64 bg-gray-100 rounded-lg"
    ></motion.div>
  );
}

