import React from "react";
import { create } from "zustand";

type ManagePropertiesStore = {
  filterOption: React.Key;
  changeOption: (key: React.Key) => void;
  fetchCount: number | null;
  setFetchCount: (key: number | null) => void;
};

const useManagePropertiesStore = create<ManagePropertiesStore>((set) => ({
  filterOption: "all",
  fetchCount: null,
  changeOption: (option) => set({ filterOption: option }),
  setFetchCount: (count) => set((state) => ({...state, fetchCount: count })),
}));

export { useManagePropertiesStore };
