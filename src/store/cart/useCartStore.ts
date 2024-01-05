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
    name: "Service name",
    cost: 49.8,
    quantity: 1,
    date: null,
    isQuantityChangable: true,
  },
  {
    name: "Be your agent",
    cost: 49.8,
    quantity: 1,
    date: "15 December 2023 .1:15pm",
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
    itemIndex // Modify parameter type
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
