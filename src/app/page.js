
"use client"
import EcoQuiz from '@/components/home/EcoQuiz';
import ImpactDashboard from '@/components/home/Impact';
import ProductBundles from '@/components/home/ProductBundel';
import Testimonials from '@/components/home/Testimonials';
import Hero from '@/components/sections/Hero';
import { products } from '@/content/Products';
import ProductGrid from '@/components/sections/ProductGrid';
import { useState, useEffect } from 'react';


export default function Home() {
  /*
  // API Implementation Example for Homepage Data:
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        setLoading(true);
        
        // Fetch featured products
        const productsResponse = await fetch('/api/products/featured');
        if (!productsResponse.ok) throw new Error('Products fetch failed');
        const productsData = await productsResponse.json();
        
        setFeaturedProducts(productsData);
        
        // If you need to fetch other homepage data (bundles, testimonials, etc.):
        // const bundlesResponse = await fetch('/api/bundles');
        // const bundlesData = await bundlesResponse.json();
        // ...set other data states here...
        
      } catch (err) {
        console.error("Homepage data fetch error:", err);
        setError(err.message);
        // Fallback to static data if API fails
        setFeaturedProducts(staticFeaturedProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchHomepageData();
  }, []);
  */

  return (
    <>
      {/* 1. Hero — First Impression */}
      <Hero />

      {/* 2. Featured Products — Show what's hot */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-heading mb-8 text-center">Featured Eco-Tech</h2>
        {/* 
        API Loading State Example:
        {loading ? (
          <LoadingSkeleton type="grid" />
        ) : error ? (
          <ErrorFallback message={error} />
        ) : (
          <ProductGrid products={products} />
        )}
        */}
        <ProductGrid products={products} />
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