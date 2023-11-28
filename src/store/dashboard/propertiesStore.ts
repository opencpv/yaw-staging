//@ts-nocheck

import { create } from "zustand";

const useManagePropertiesStore = create((set) => ({
  filterOption: "all",
  changeOption: (option) => set({ filterOption: option }),
}));

export { useManagePropertiesStore };


const useManageReviewsStore = create((set) => ({
  filterOption: "reviewers-say",
  changeOption: (option) => set({ filterOption: option }),
}));

export { useManageReviewsStore };


const useManageAccountStore = create((set) => ({
  filterOption: "profile",
  changeOption: (option) => set({ filterOption: option }),
}));

export { useManageAccountStore };