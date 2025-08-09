

//File: components/home/ProductBundles.js

import { bundles } from "@/content/Products";
import BundleCard from "../ui/BundleCard";
import Button from "../ui/Button";



/*
// API implementation - commented out for now
async function fetchBundles() {
  try {
    const response = await fetch('/api/bundles');
    if (!response.ok) {
      throw new Error('Failed to fetch bundles');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching bundles:', error);
    // Return mock data as fallback
    return bundles;
  }
}
*/

export default function ProductBundles() {
  // Currently using mock data
  // For API implementation, you would use:
  // const [bundles, setBundles] = useState([]);
  // useEffect(() => { fetchBundles().then(data => setBundles(data)); }, []);

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