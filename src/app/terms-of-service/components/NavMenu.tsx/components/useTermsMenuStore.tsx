import { create } from "zustand";

type TermsMenuStore = {
    termsMenuToggle: boolean;
    setTermsMenuToggle: (val: boolean) => void;

}

export const useTermsMenuStore = create<TermsMenuStore>((set) => ({
    termsMenuToggle: false,
    setTermsMenuToggle: (val) => set({ termsMenuToggle: val }),
}));
