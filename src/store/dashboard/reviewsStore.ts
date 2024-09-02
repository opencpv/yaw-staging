import { create } from "zustand";

type MySearchFilterStore = {
  activePage: string;
  setActivePage: (page: string) => void;
  subActivePage: string;
  setSubActivePage: (page: string) => void;
};

export const useReviewsStore = create<MySearchFilterStore>((set) => ({
  activePage: "Reviews Received",
  setActivePage: (page) => set({ activePage: page }),

  subActivePage: "none",
  setSubActivePage: (page) => set({ subActivePage: page }),
}));
