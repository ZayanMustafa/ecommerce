import Hero from '@/components/sections/Hero';
import ProductGrid from '@/components/sections/ProductGrid';

// Mock data - replace with API calls
const featuredProducts = [
  {
    id: 1,
    name: 'Solar-Powered Desk Lamp',
    price: 49.99,
    image: 'solar-lamp.jpg',
    description: 'Charge with sunlight, lasts 20 hours'
  },
  {
    id: 2,
    name: 'Bamboo Bluetooth Speaker',
    price: 79.99,
    image: 'bamboo-speaker.jpg',
    description: 'Natural sound with zero plastic'
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-heading mb-8 text-center">Featured Eco-Tech</h2>
        <ProductGrid products={featuredProducts} />
      </section>
    </>
  );
}