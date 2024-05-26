import { PaymentData } from "@/app/b2b/components/types";
import { create } from "zustand";

type ReceiptStore = {
  checkedOutItems: PaymentData[];
  setCheckedOutItems: (items: PaymentData[]) => void;
};

export const receiptStore = create<ReceiptStore>((set) => ({
  checkedOutItems: [],
  setCheckedOutItems: (items) =>
    set((state) => ({
      ...state,
      checkedOutItems: items,
    })),
}));
