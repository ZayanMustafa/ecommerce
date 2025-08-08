


import ProductCard from '@/components/ui/ProductCard';

export default function ProductDetail({ params }) {
  // In a real app, fetch product by ID
  const product = {
    id: params.id,
    name: 'Solar-Powered Desk Lamp',
    price: 49.99,
    image: 'solar-lamp.jpg',
    description: 'A revolutionary lamp that charges entirely through solar power. Perfect for your home office or bedside table.',
    features: [
      '10W solar panel',
      '20 hours battery life',
      '3 brightness levels',
      'USB-C charging backup'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 rounded-lg h-96 overflow-hidden">
          <img 
            src={`/images/${product.image}`} 
            alt={product.name} 
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-heading mb-4">{product.name}</h1>
          <p className="text-2xl text-teal-600 mb-6">${product.price.toFixed(2)}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}