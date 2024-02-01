import { create } from "zustand";

type MySearchFilterStore = {
  activePage: React.Key;
  setActivePage: (page: React.Key) => void;
};

export const useMySearchFilterStore = create<MySearchFilterStore>((set) => ({
  activePage: "favourites",
  setActivePage: (page) => set({ activePage: page }),
}));
