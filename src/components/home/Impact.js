


// components/home/ImpactDashboard.js
'use client';
import {motion} from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
import { GiTreeGrowth, GiWaterDrop, GiRecycle } from 'react-icons/gi';
import Button from '../ui/Button.js';

const metrics = [
  { 
    icon: <GiTreeGrowth className="text-3xl" />,
    value: 12500,
    label: "Trees Planted",
    color: "text-green-500"
  },
  {
    icon: <GiWaterDrop className="text-3xl" />,
    value: 8400,
    label: "Liters Water Saved",
    color: "text-blue-500"
  },
  {
    icon: <GiRecycle className="text-3xl" />,
    value: 15600,
    label: "Plastic Items Offset",
    color: "text-teal-500"
  }
];

export default function ImpactDashboard() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading mb-12 text-center">
          Your Purchases Make a Difference
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <div className={`${metric.color} mb-4 flex justify-center`}>
                {metric.icon}
              </div>
              <CountUp 
                end={metric.value} 
                duration={3} 
                className={`text-4xl font-bold ${metric.color}`}
                separator=","
              />
              <p className="mt-2 text-gray-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/impact">
            <Button 
              text="See Our Sustainability Report" 
              color="teal" 
              outline
            />
          </Link>
        </div>
      </div>
    </section>
  );
}


