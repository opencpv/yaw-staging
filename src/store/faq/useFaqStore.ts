import { create } from "zustand";

type FaqHowToSwitchStore = {
  activePage: string
  setActivePage: (page: string) => void;
};

type HowToTabsStore = {
  activeTab: string
  setActiveTab: (page: string) => void;
};

export const useFaqHowToSwitchStore = create<FaqHowToSwitchStore>((set) => ({
  activePage: "faq",
  setActivePage: (page) => set({ activePage: page }),
}));

export const useHowToTabsStore = create<HowToTabsStore>((set) => ({
  activeTab: "all",
  setActiveTab: (page: string) => set({ activeTab: page }),
}));