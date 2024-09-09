import { create } from "zustand";

type ManagePropertiesStore = {
  filterOption: string;
  changeOption: (key: string) => void;
  fetchCount: number | null;
  setFetchCount: (key: number | null) => void;
};

const useManagePropertiesStore = create<ManagePropertiesStore>((set) => ({
  filterOption: "All",
  fetchCount: null,
  changeOption: (option) => set({ filterOption: option }),
  setFetchCount: (count) => set((state) => ({ ...state, fetchCount: count })),
}));

export { useManagePropertiesStore };

const useManageReviewsStore = create((set) => ({
  filterOption: "reviewers-say",
  changeOption: (option: any) => set({ filterOption: option }),
}));

export { useManageReviewsStore };

const useManageAccountStore = create((set) => ({
  filterOption: "profile",
  changeOption: (option: any) => set({ filterOption: option }),
}));

export { useManageAccountStore };
