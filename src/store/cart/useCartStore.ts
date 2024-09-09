import { create } from "zustand";
import { CartProp } from "../../../interfaces";

interface DiscountType {
  code: string | null;
  rate: number;
}
interface CartStore {
  items: CartProp[];
  discountCode: DiscountType;
  setDiscountCode: (discount: DiscountType) => void;
  addItem: (item: CartProp) => void;
  setCart: (items: CartProp[]) => void;
  updateQuantity: (itemIndex: number, newQuantity: number) => void;
  removeItem: (itemIndex: number) => void; // Modify parameter type
  clearCart: () => void;
  getTotalPrice: (items: CartProp[], discount?: DiscountType) => number;
}

const cartData: CartProp[] = [];

const useCartStore = create<CartStore>((set) => ({
  items: cartData,
  discountCode: { code: null, rate: 0 },
  setDiscountCode: (item) => set((state) => ({ discountCode: item })),
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  setCart: (items) => set((state) => ({ items: items })),
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
  getTotalPrice: (items, discount) => {
    const total = items.reduce(
      (total, item) => total + item.cost * item.quantity,
      0,
    );
    if (discount) {
      return total * (1 - discount.rate);
    } else {
      return total;
    }
  },
}));

export default useCartStore;
