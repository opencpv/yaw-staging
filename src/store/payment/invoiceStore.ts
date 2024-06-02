import { PaymentData } from "@/app/b2b/components/types";
import { create } from "zustand";

type InvoiceStore = {
  activePage: React.Key;
  setActivePage: (option: React.Key) => void;
  checkoutItems: Invoice[];
  invoiceItems: Invoice[];
  setCheckoutItems: (items: Invoice[]) => void;
  setInvoiceItems: (items: Invoice[]) => void;
  removeCheckoutItemById: (id: number) => void;
  addCheckoutItem: (item: Invoice) => void; // Add this line
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
  invoiceDownloadClassName: "",
  setInvoiceDownloadClassName: (className: string) =>
    set((state) => ({ ...state, invoiceDownloadClassName: className })),
}));
