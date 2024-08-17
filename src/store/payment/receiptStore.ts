import { create } from "zustand";

type ReceiptStore = {
  checkedOutItems: Invoice[];
  setCheckedOutItems: (items: Invoice[]) => void;
};

export const receiptStore = create<ReceiptStore>((set) => ({
  checkedOutItems: [],
  setCheckedOutItems: (items) =>
    set((state) => ({
      ...state,
      checkedOutItems: items,
    })),
}));
