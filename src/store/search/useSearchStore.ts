import React from "react";
import { create } from "zustand";

type SearchSwitchStore = {
  activePage: React.Key
  setActivePage: (page: React.Key) => void;
};



export const useSearchStore = create<SearchSwitchStore>((set) => ({
  activePage: "favorite",
  setActivePage: (page) => set({ activePage: page }),
}));
