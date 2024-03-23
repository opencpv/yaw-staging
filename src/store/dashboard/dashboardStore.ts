import { create } from "zustand";

export type Role = "renter" | "lister";

type DashboardStore = {
  currentRole: Role;
  isSwitchingRole: boolean;
  firstTimeRole: Role | undefined;
  setCurrentRole: (key: Role) => void;
  setIsSwitchingRole: (key: boolean) => void;
  setFirstTimeRole: (key: Role | undefined) => void;
};

const useDashboardStore = create<DashboardStore>((set) => ({
  currentRole: "renter",
  isSwitchingRole: false,
  firstTimeRole: undefined,
  setCurrentRole: (role) => set((state) => ({ ...state, currentRole: role })),
  setFirstTimeRole: (role) =>
    set((state) => ({ ...state, firstTimeRole: role })),
  setIsSwitchingRole: (isSwitching) =>
    set((state) => ({ ...state, isSwitchingRole: isSwitching })),
}));

export { useDashboardStore };
