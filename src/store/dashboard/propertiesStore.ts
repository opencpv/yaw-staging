//@ts-nocheck

import { create } from "zustand";

const useManagePropertiesStore = create((set) => ({
  filterOption: "all",
  changeOption: (option) => set({ filterOption: option }),
}));

export { useManagePropertiesStore };
