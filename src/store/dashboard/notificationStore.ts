// store.ts
import {create} from 'zustand';
import { devtools } from 'zustand/middleware';


type AppStore = {
  notifications: any [];
  setNotifications: (user: any) => void;
};
export const useNotificationStore = create<AppStore>((set) => ({
    notifications: [],
    setNotifications: (update) => set((state) => ({ notifications: state.notifications})),

  }));