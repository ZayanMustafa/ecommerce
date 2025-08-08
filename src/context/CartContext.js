

'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const existingItem = get().items.find(item => item.id === product.id);
        if (existingItem) {
          return set({
            items: get().items.map(item =>
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          });
        }
        set({ items: [...get().items, { ...product, quantity: 1 }] });
      },
      removeItem: (id) => {
        set({ items: get().items.filter(item => item.id !== id) });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'ecogadget-cart',
      getStorage: () => localStorage,
    }
  )
);

export default useCart;