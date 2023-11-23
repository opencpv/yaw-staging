import { create } from "zustand";

type ManagePropertiesStore = {
  filterOption: string;
  changeOption: (key: string) => void;
};

const useManagePropertiesStore = create<ManagePropertiesStore>((set) => ({
  filterOption: "all",
  changeOption: (option: string) => set({ filterOption: option }),
}));

export { useManagePropertiesStore };
