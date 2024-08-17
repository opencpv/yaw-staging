import React from "react";
import { create } from "zustand";

type FaqHowToSwitchStore = {
  activePage: React.Key;
  setActivePage: (page: React.Key) => void;
};

type HowToTabsStore = {
  activeTab: React.Key;
  setActiveTab: (page: React.Key) => void;
};

type FaqStore = {
  activeBrowser: number;
  setActiveBrowser: (value: number) => void;
};

export const useFaqHowToSwitchStore = create<FaqHowToSwitchStore>((set) => ({
  activePage: "faq",
  setActivePage: (page) => set({ activePage: page }),
}));

export const useHowToTabsStore = create<HowToTabsStore>((set) => ({
  activeTab: "all",
  setActiveTab: (page) => set({ activeTab: page }),
}));

export const useFaqStore = create<FaqStore>((set) => ({
  activeBrowser: 0,
  setActiveBrowser: (value) =>
    set((state) => ({ ...state, activeBrowser: value })),
}));
