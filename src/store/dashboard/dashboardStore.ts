import { create } from "zustand";

type Role = "renter" | "lister";

type DashboardStore = {
  currentRole: Role;
  setCurrentRole: (key: Role) => void;
};

const useDashboardStore = create<DashboardStore>((set) => ({
  currentRole: "renter",
  setCurrentRole: (role) => set({ currentRole: role }),
}));

export { useDashboardStore };
