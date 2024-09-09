import { create } from "zustand";

type DashboardMenuStore = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

export const useDashboardMenuStore = create<DashboardMenuStore>((set) => ({
  isOpen: false,
  setIsOpen: (val) => set({ isOpen: val }),
}));
