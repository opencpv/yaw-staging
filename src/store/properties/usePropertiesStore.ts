import { create } from "zustand";

type PropertyCarouselStore = {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
};

const usePropertyCarouselStore = create<PropertyCarouselStore>((set) => ({
  activeIndex: 0,
  setActiveIndex: (idx) => set({ activeIndex: idx }),
}));

export { usePropertyCarouselStore };
