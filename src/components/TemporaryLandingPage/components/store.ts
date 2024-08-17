import React from "react";
import { create } from "zustand";

type GetNotifiedStore = {
  filterOption: React.Key;
  changeOption: (key: React.Key) => void;
};

const useGetNotifiedStore = create<GetNotifiedStore>((set) => ({
  filterOption: "email",
  changeOption: (option) => set({ filterOption: option }),
}));

export { useGetNotifiedStore };
