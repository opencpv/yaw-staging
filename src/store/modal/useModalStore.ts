import { create } from "zustand";

type ModalFullscreenStore = {
  hideWindowScrollbar: boolean;
  setHideWindowScrollbar: (option: boolean) => void;
};

export const useModalFullscreenStore = create<ModalFullscreenStore>((set) => ({
  hideWindowScrollbar: false,
  setHideWindowScrollbar: (option) => set({ hideWindowScrollbar: option }),
}));