'use client';
import { useState } from 'react';
import Link from 'next/link';

// Mock product data
const mockProducts = [
  { id: 1, name: 'Solar Charger', price: 49.99, stock: 42, category: 'Solar' },
  { id: 2, name: 'Bamboo Speaker', price: 79.99, stock: 15, category: 'Audio' },
  { id: 3, name: 'Smart Planter', price: 89.99, stock: 8, category: 'Garden' },
];

export default function AdminProducts() {
  const [products, setProducts] = useState(mockProducts);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: ''
  });

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category
    });
  };

  const handleSave = () => {
    // TODO: Replace with API call
    // await fetch(`/api/admin/products/${editingId}`, {
    //   method: 'PUT',
    //   body: JSON.stringify(formData)
    // });
    
    setProducts(products.map(p => 
      p.id === editingId ? { ...p, ...formData } : p
    ));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    // TODO: Replace with API call
    // await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
    
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Link 
          href="/admin/products/new" 
          className="bg-teal-600 text-white px-4 py-2 rounded-md"
        >
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Stock</th>
              <th className="px-6 py-3 text-left">Category</th>
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
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="border rounded px-2 py-1 w-20"
                    />
                  ) : (
                    `$${product.price}`
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                      className="border rounded px-2 py-1 w-16"
                    />
                  ) : (
                    product.stock
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === product.id ? (
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="border rounded px-2 py-1"
                    >
                      <option value="Solar">Solar</option>
                      <option value="Audio">Audio</option>
                      <option value="Garden">Garden</option>
                    </select>
                  ) : (
                    product.category
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
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
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
