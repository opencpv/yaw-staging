import { create } from "zustand";

type HowToTabsStore = {
  activeTab: string;
  setActiveTab: (page: string) => void;
};

type FaqStore = {
  activeBrowser: number;
  setActiveBrowser: (value: number) => void;
};

export const useHowToTabsStore = create<HowToTabsStore>((set) => ({
  activeTab: "All",
  setActiveTab: (page) => set({ activeTab: page }),
}));

export const useFaqStore = create<FaqStore>((set) => ({
  activeBrowser: 0,
  setActiveBrowser: (value) =>
    set((state) => ({ ...state, activeBrowser: value })),
}));
