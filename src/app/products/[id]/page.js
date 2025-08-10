


import { products } from "@/content/Products.js";
import Image from "next/image";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-12 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 rounded-lg h-96 overflow-hidden">
          <Image
            height={384}
            width={384}
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-heading mb-4">{product.name}</h1>
          <p className="text-2xl text-teal-600 mb-6">
            ${product.price.toFixed(2)}
          </p>

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
