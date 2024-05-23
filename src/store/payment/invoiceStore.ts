import { PaymentData } from "@/app/b2b/components/types";
import { create } from "zustand";

type InvoiceStore = {
  activePage: React.Key;
  setActivePage: (option: React.Key) => void;
  checkoutItems: Invoice[];
  setCheckoutItems: (items: Invoice[]) => void;
  invoiceDownloadClassName: string;
  setInvoiceDownloadClassName: (className: string) => void;
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
  invoiceDownloadClassName: "",
  setInvoiceDownloadClassName: (className) =>
    set((state) => ({ ...state, invoiceDownloadClassName: className })),
}));
