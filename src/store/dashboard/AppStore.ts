// store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStore = {
  user: any | undefined;
  setUser: (user: any) => void;
};
export const useAppStore = create<AppStore>((set) => ({
  user: {},
  setUser: (userData) => set({ user: userData }),
}));
