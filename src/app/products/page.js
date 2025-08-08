


import ProductGrid from '@/components/sections/ProductGrid';

// Mock data - replace with API call
const allProducts = [
  {
    id: 1,
    name: 'Solar-Powered Desk Lamp',
    price: 49.99,
    image: 'solar-lamp.jpg',
    description: 'Charge with sunlight, lasts 20 hours'
  },
  // ... more products
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading mb-8">All Products</h1>
      <ProductGrid products={allProducts} />
    </div>
  );
}

