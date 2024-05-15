import { PaymentData } from "@/app/b2b/components/types";
import { create } from "zustand";

type InvoiceStore = {
  activePage: React.Key;
  setActivePage: (option: React.Key) => void;
  checkoutItems: PaymentData[];
  setCheckoutItems: (items: PaymentData[]) => void;
};

export const invoiceStore = create<InvoiceStore>((set) => ({
  activePage: "invoice",
  setActivePage: (option) => set((state) => ({ ...state, activePage: option })),
  checkoutItems: [],
  setCheckoutItems: (items) =>
    set((state) => ({
      ...state,
      checkoutItems: items,
    })),
}));
