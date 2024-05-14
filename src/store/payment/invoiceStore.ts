import { create } from "zustand";

type InvoiceStore = {
  activePage: React.Key;
  setActivePage: (option: React.Key) => void;
};

export const invoiceStore = create<InvoiceStore>((set) => ({
  activePage: "invoice",
  setActivePage: (option) => set({ activePage: option }),
}));
