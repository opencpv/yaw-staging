import { UserRole } from "@/app/dashboard/types";
import { create } from "zustand";

type DashboardStore = {
  currentRole: UserRole;
  isSwitchingRole: boolean;
  firstTimeRole: UserRole | undefined;
  setCurrentRole: (key: UserRole) => void;
  setIsSwitchingRole: (key: boolean) => void;
  setFirstTimeRole: (key: UserRole | undefined) => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  currentRole: "RENTER",
  isSwitchingRole: false,
  firstTimeRole: undefined,
  setCurrentRole: (role) => set((state) => ({ ...state, currentRole: role })),
  setFirstTimeRole: (role) =>
    set((state) => ({ ...state, firstTimeRole: role })),
  setIsSwitchingRole: (isSwitching) =>
    set((state) => ({ ...state, isSwitchingRole: isSwitching })),
}));
