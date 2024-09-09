import { create } from "zustand";


type JoinUsPageStore = {
  isScrolling: boolean;
  setIsNavScrolling: (isScrolling: boolean) => void;
}

export const useJoinUsPageStore = create<JoinUsPageStore>(
  (set) => ({
    isScrolling: false,
    setIsNavScrolling: (isScrolling) => set({ isScrolling }),
  }),
);
