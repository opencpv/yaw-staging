import { create } from "zustand";

type MySearchFilterStore = {
  activePage: React.Key;
  setActivePage: (page: React.Key) => void;
  subActivePage: React.Key;
  setSubActivePage: (page: React.Key) => void;
};

export const useReviewsStore = create<MySearchFilterStore>((set) => ({
  activePage: "Reviews Received",
  setActivePage: (page) => set({ activePage: page }),

  subActivePage: "none",
  setSubActivePage: (page) => set({ subActivePage: page }),

}));



