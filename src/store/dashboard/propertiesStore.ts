import { create } from "zustand";

type ManagePropertiesStore = {
  filterOption: string;
  changeOption: (key: string) => void;
  fetchCount: number | null;
  setFetchCount: (key: number | null) => void;
};

const useManagePropertiesStore = create<ManagePropertiesStore>((set) => ({
  filterOption: "all",
  fetchCount: null,
  changeOption: (option: string) => set({ filterOption: option }),
  setFetchCount: (count: number | null) =>
    set((state) => ({ ...state, fetchCount: count })),
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

const useManageInvoicesStore = create((set) => ({
  filterOption: "invoice",
  changeOption: (option: any) => set({ filterOption: option }),
}));

export { useManageAccountStore, useManageInvoicesStore };
