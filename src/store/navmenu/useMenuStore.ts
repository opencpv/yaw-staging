import { create } from "zustand";

type NavMenuStore = {
  toggle: boolean;
  setToggle: (val: boolean) => void;
  activeSubLink: string;
  setActiveSubLink: (val: string) => void;
};

export const useMenuStore = create<NavMenuStore>((set) => ({
  toggle: false,
  setToggle: (val) => set({ toggle: val }),
  activeSubLink: "",
  setActiveSubLink: (val) => set({ activeSubLink: val }),
}));
