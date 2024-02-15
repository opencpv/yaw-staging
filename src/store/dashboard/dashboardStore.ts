import { create } from "zustand";

type Role = "renter" | "lister";

type DashboardStore = {
  currentRole: Role;
  isSwitchingRole: boolean;
  setCurrentRole: (key: Role) => void;
  setIsSwitchingRole: (key: boolean) => void;
};

const useDashboardStore = create<DashboardStore>((set) => ({
  currentRole: "renter",
  isSwitchingRole: false,
  setCurrentRole: (role) => set((state) => ({ ...state, currentRole: role })),
  setIsSwitchingRole: (isSwitching) =>
    set((state) => ({ ...state, isSwitchingRole: isSwitching })),
}));

export { useDashboardStore };
