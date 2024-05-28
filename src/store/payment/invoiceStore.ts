import { PaymentData } from "@/app/b2b/components/types";
import { create } from "zustand";

type InvoiceStore = {
  activePage: React.Key;
  setActivePage: (option: React.Key) => void;
  checkoutItems: PaymentData[];
  invoiceItems: PaymentData[];
  setCheckoutItems: (items: PaymentData[]) => void;
  setInvoiceItems: (items: PaymentData[]) => void;
  removeCheckoutItemById: (id: number) => void;
  addCheckoutItem: (item: PaymentData) => void; // Add this line
};

export const invoiceStore = create<InvoiceStore>((set) => ({
  activePage: "invoice",
  invoiceItems: [],
  setActivePage: (option) => set((state) => ({ ...state, activePage: option })),
  checkoutItems: [],
  setCheckoutItems: (items) =>
    set((state) => ({
      ...state,
      checkoutItems: items,
    })),
  setInvoiceItems: (items) =>
    set((state) => ({
      ...state,
      invoiceItems: items,
    })),
  removeCheckoutItemById: (id) =>
    set((state) => ({
      checkoutItems: state.checkoutItems.filter((item) => item.id !== id),
    })),
  addCheckoutItem: (
    item, // Add this function
  ) =>
    set((state) => ({
      checkoutItems: [...state.checkoutItems, item],
    })),
}));
