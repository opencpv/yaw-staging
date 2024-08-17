import { create } from "zustand";

type InvoiceStore = {
  activePage: React.Key;
  setActivePage: (option: React.Key) => void;
  checkoutItems: Invoice[];
  invoiceItems: Invoice[];
  receiptItem: Invoice[];
  setCheckoutItems: (items: Invoice[]) => void;
  setInvoiceItems: (items: Invoice[]) => void;
  removeCheckoutItemById: (id: number) => void;
  addCheckoutItem: (item: Invoice) => void; // Add this line
  addRecieptItem: (item: Invoice) => void; // Add this line
  removeReceiptItemById: (id: number) => void;
  setReceiptItems: (items: Invoice[]) => void;
};

export const invoiceStore = create<InvoiceStore>((set) => ({
  activePage: "invoice",
  invoiceItems: [],
  receiptItem: [],
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
  addRecieptItem: (
    item, // Add this function
  ) =>
    set((state) => ({
      receiptItem: [...state.receiptItem, item],
    })),
  removeReceiptItemById: (id) =>
    set((state) => ({
      receiptItem: state.checkoutItems.filter((item) => item.id !== id),
    })),
  setReceiptItems: (items) =>
    set((state) => ({
      ...state,
      receiptItem: items,
    })),
  invoiceDownloadClassName: "",
  setInvoiceDownloadClassName: (className: string) =>
    set((state) => ({ ...state, invoiceDownloadClassName: className })),
}));
