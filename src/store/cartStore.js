import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      products: [],
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, { ...product, quantity: 1 }],
        })),
      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
      inc: () => set((state) => ({ count: state.count + 1 })),
      dec: () => set((state) => ({ count: state.count - 1 })),
      incQty: (id) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        })),
      decQty: (id) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        })),
      reset: () => set({ count: 0, products: [] }),
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        count: state.count,
        products: state.products,
      }),
    }
  )
);

export default useStore;
