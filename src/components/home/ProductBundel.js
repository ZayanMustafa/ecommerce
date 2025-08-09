

// components/home/ProductBundles.js

import BundleCard from "../ui/BundleCard";
import Button from "../ui/Button";


const bundles = [
  {
    name: "Smart Home Starter Kit",
    discount: "Save 20%",
    price: "$189 (value $235)",
    items: [
      "Solar Charger",
      "Smart Thermostat", 
      "Bamboo Speaker"
    ],
    image: "/bundles/starter-kit.jpg",
    badge: "Most Popular"
  },
  {
    name: "Eco-Friendly Office Bundle",
    discount: "Save 15%",
    price: "$159 (value $187)",
    items: [
      "Bamboo Keyboard",
      "Recycled Paper Notebooks",
      "Plant-Based Ink Pens"
    ],
    image: "/bundles/office-bundle.jpg",
    badge: "Best Seller"
  },
  {
    name: "Outdoor Adventure Kit",
    discount: "Save 25%",
    price: "$129 (value $172)",
    items: [
      "Portable Solar Charger",
      "Eco-Friendly Water Bottle",
      "Biodegradable Phone Case"
    ],
    image: "/bundles/adventure-kit.jpg",
    badge: "Limited Edition"
  }
];

export default function ProductBundles() {
  return (
    <section className="py-16 container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-heading">Curated Eco-Bundles</h2>
        <Button 
          text="View All Bundles" 
          href="/bundles" 
          color="teal" 
          outline
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bundles.map((bundle, i) => (
          <BundleCard key={i} {...bundle} />
        ))}
      </div>
    </section>
  );
}
