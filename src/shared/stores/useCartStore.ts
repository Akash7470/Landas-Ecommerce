import { create } from "zustand";

type Item = { id: number; title: string; price: number };

type CartState = {
  items: Item[];
  add: (item: Item) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (item) => set((s) => ({ items: [...s.items, item] })),
  clear: () => set({ items: [] }),
}));