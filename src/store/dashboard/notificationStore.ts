import { NotificationType } from "@/app/dashboard/renter/notifications/components/types";
import create from "zustand";

type AppStore = {
  notifications: NotificationType[];
  unreadNotifications: NotificationType[];

  currentNotification?: NotificationType; // Define the currentNotification type
  setNotifications: (notifications: NotificationType[]) => void;
  setUnReadNotifications: (notifications: NotificationType[]) => void;

  setCurrentNotification: any
};

export const useNotificationStore = create<AppStore>((set) => ({
  notifications: [],
  unreadNotifications: [],

  currentNotification: undefined,

  setNotifications: (notifications) =>
    set((state) => ({ ...state, notifications: notifications })),

  setUnReadNotifications: (notifications) =>
    set((state) => ({ ...state, unreadNotifications: notifications })),

  setCurrentNotification: (notification : any) =>
    set((state) => ({ ...state, currentNotification: notification })),
}));
