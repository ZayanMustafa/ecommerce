


'use client'

import { useState, useEffect } from 'react';
import ProductGrid from '@/components/sections/ProductGrid';
import LoadingSkeleton from '@/components/ui/LoadingSkeleton.js';

import { products as staticProducts } from '@/content/Products';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* 
  // API Implementation Example:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Example with fetch API
        const response = await fetch('/api/products');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
        // Fallback to static products if API fails
        setProducts(staticProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    
    // Cleanup function
    return () => {
      // Cancel any pending requests if component unmounts
      // (Would need AbortController for fetch or axios cancellation token)
    };
  }, []); 
  */

  // Currently using static data (remove when API is implemented)
  useEffect(() => {
    setProducts(staticProducts);
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading mb-8">All Products</h1>
      
      {error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <p className="text-red-700">Error loading products: {error}</p>
          <p className="text-sm text-red-600 mt-1">
            Showing static product data instead
          </p>
        </div>
      ) : null}

      {loading ? (
        <LoadingSkeleton type="grid" />
      ) : (
        <>
          {/* 
          // Add when implementing search/filters:
          <div className="mb-8">
            <ProductFilters 
              onFilterChange={(filters) => {
                // Update API query with filters
                console.log('Filters changed:', filters);
              }}
            />
          </div>
          */}
          <ProductGrid products={products} />
        </>
      )}
    </div>
  );
}

