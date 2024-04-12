// store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserType extends User {
  email?: string;
  shouldBeContacted?: boolean;
}

type AppStore = {
  user: UserType | null;
  setUser: (user: any) => void;
};
export const useAppStore = create<AppStore>((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
}));
