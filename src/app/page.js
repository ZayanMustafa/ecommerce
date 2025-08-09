import EcoQuiz from '@/components/home/EcoQuiz';
import ImpactDashboard from '@/components/home/Impact';
import ProductBundles from '@/components/home/ProductBundel';
import Testimonials from '@/components/home/Testimonials';
import Hero from '@/components/sections/Hero';
import ProductGrid from '@/components/sections/ProductGrid';

// Mock data - replace with API calls
const featuredProducts = [
{
    id: '1',
    name: 'Solar-Powered Desk Lamp',
    price: 49.99,
    image: 'solar-lamp.jpg',
    description:
      'A revolutionary lamp that charges entirely through solar power. Perfect for your home office or bedside table.',
    features: [
      '10W solar panel',
      '20 hours battery life',
      '3 brightness levels',
      'USB-C charging backup'
    ]
  },
  {
    id: '2',
    name: 'Eco-Friendly Bamboo Keyboard',
    price: 79.99,
    image: 'bamboo-keyboard.jpg',
    description:
      'A sleek wireless keyboard crafted from sustainable bamboo, offering an eco-friendly and stylish typing experience.',
    features: [
      'Bluetooth 5.0 connectivity',
      'Rechargeable battery',
      'Compact design',
      'Silent keystrokes'
    ]
  },
  {
    id: '3',
    name: 'Smart Water Bottle',
    price: 39.99,
    image: 'smart-bottle.jpg',
    description:
      'Tracks your daily water intake and reminds you to stay hydrated with gentle glowing alerts.',
    features: [
      'Hydration tracking app',
      'LED glow reminder',
      'Keeps water cold for 24 hours',
      'USB-C fast charging'
    ]
  },
  {
    id: '4',
    name: 'Portable Solar Charger',
    price: 59.99,
    image: 'solar-charger.jpg',
    description:
      'Charge your devices anywhere with this foldable and lightweight solar charging panel.',
    features: [
      'Dual USB output',
      'High-efficiency monocrystalline panels',
      'Water-resistant design',
      'Foldable for easy storage'
    ]
  },
  {
    id: '5',
    name: 'Air-Purifying Plant Pot',
    price: 29.99,
    image: 'plant-pot.jpg',
    description:
      'A self-watering plant pot with an integrated air purifier to keep your home fresh and green.',
    features: [
      'Built-in HEPA filter',
      'Self-watering system',
      'Minimalist ceramic design',
      'USB-powered fan'
    ]
  }
];

export default function Home() {
  return (
<>
  {/* 1. Hero — First Impression */}
  <Hero />

  {/* 2. Featured Products — Show what's hot */}
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-3xl font-heading mb-8 text-center">Featured Eco-Tech</h2>
    <ProductGrid products={featuredProducts} />
  </section>

  {/* 3. Product Bundles */}
  <section className="container mx-auto px-4 py-12">
    <ProductBundles />
  </section>

  {/* 4. Testimonials */}
  <section className="container mx-auto px-4 py-12">
    <Testimonials />
  </section>

  {/* 5. Interactive Quiz */}
  <section className="container mx-auto px-4 py-12">
    <EcoQuiz />
  </section>

  {/* 6. Impact Dashboard */}
  <section className="container mx-auto px-4 py-12">
    <ImpactDashboard />
  </section>
</>


  );
}