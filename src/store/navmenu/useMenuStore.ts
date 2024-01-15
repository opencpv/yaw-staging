import { create } from "zustand";


type NavMenuStore = {
    toggle: boolean;
    setToggle: (val: boolean) => void
}

export const useMenuStore = create<NavMenuStore>((set) => ({
    toggle: false,
    setToggle: (val) => set({toggle: val})
}))