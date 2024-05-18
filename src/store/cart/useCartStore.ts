import { create } from "zustand";
import { CartProp } from "../../../interfaces";

interface CartStore {
  items: CartProp[];
  addItem: (item: CartProp) => void;
  updateQuantity: (itemIndex: number, newQuantity: number) => void;
  removeItem: (itemIndex: number) => void; // Modify parameter type
  clearCart: () => void;
  getTotalPrice: (items: CartProp[]) => number;
}

const cartData: CartProp[] = [
  {
    name: "Be The First To Know",
    cost: 49.8,
    quantity: 1,
    date: null,
    isQuantityChangable: true,
  },
  {
    name: "Be My Agent",
    cost: 49.8,
    quantity: 1,
    date: "Wed, 15 May 2024 11:27:55 GMT",
    isQuantityChangable: false,
  },
];

const useCartStore = create<CartStore>((set) => ({
  items: cartData,
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  updateQuantity: (itemIndex, newQuantity) =>
    set((state) => {
      const updatedItems = [...state.items];
      updatedItems[itemIndex].quantity = newQuantity;
      return { items: updatedItems };
    }),
  removeItem: (
    itemIndex, // Modify parameter type
  ) =>
    set((state) => ({
      items: state.items.filter((_, index) => index !== itemIndex),
    })),
  clearCart: () => set({ items: [] }),
  getTotalPrice: (items) => {
    return items.reduce((total, item) => total + item.cost * item.quantity, 0);
  },
}));

export default useCartStore;
