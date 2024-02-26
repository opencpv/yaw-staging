import { create } from "zustand";

type ApplicationsStore = {
  fetchCount: number | null;
  setFetchCount: (key: number | null) => void;
};

const useApplicationsStore = create<ApplicationsStore>((set) => ({
  fetchCount: null,
  setFetchCount: (count) => set({ fetchCount: count }),
}));

export { useApplicationsStore };
