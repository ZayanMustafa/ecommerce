


'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function AdminProductsPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Solar-Powered Desk Lamp',
      price: 49.99,
      stock: 42
    },
    // ... more products
  ]);

  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: ''
  });

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock
    });
  };

  const handleSave = () => {
    // Update product logic
    setEditingId(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading">Manage Products</h1>
        <Button text="Add Product" color="teal" />
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Stock</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4">
                  {editingId === product.id ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="border rounded px-2 py-1 w-20"
                    />
                  ) : (
                    `$${product.price.toFixed(2)}`
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                      className="border rounded px-2 py-1 w-20"
                    />
                  ) : (
                    product.stock
                  )}
                </td>
                <td className="px-6 py-4 space-x-2">
                  {editingId === product.id ? (
                    <>
                      <button 
                        onClick={handleSave}
                        className="text-teal-600 hover:text-teal-800"
                      >
                        Save
                      </button>
                      <button 
                        onClick={() => setEditingId(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => handleEdit(product)}
                      className="text-teal-600 hover:text-teal-800"
                    >
                      Edit
                    </button>
                  )}
                  <button className="text-coral-500 hover:text-coral-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
