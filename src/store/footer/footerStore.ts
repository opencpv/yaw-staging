import { create } from "zustand";

type FloatIntersectionStore = {
  isIntersecting: boolean;
  hasIntersected: boolean;
  setIsIntersecting: (isIntersecting: boolean) => void;
  setHasIntersected: (hasIntersected: boolean) => void;
};

export const floatItemsIntersectionStore = create<FloatIntersectionStore>(
  (set) => ({
    isIntersecting: false,
    hasIntersected: false,
    setIsIntersecting: (isIntersecting) =>
      set((state) => ({ ...state, isIntersecting })),
    setHasIntersected: (hasIntersected) =>
      set((state) => ({ ...state, hasIntersected })),
  }),
);
