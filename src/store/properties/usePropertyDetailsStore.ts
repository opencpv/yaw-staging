import { create } from "zustand";

type PropertyDetailsStore = {
  readMore: boolean;
  toggleReadMore: () => void;
};

const usePropertyDetailsStore = create<PropertyDetailsStore>((set) => ({
  readMore: false,
  toggleReadMore: () => set((state) => ({...state, readMore: !state.readMore})),
}));

export { usePropertyDetailsStore };
