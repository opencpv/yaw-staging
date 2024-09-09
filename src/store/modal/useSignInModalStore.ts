import { create } from "zustand";

type signInModalStore = {
  openSignInModal: boolean;
  setOpenSignInModal: (val: boolean) => void;
};

export const useSignInModalStore = create<signInModalStore>((set) => ({
  openSignInModal: false,
  setOpenSignInModal: (val: boolean) => set({ openSignInModal: val }),
}));
