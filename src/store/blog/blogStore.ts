import { create } from "zustand";

type BlogCategoryStore = {
  filterOption: string;
  changeCategoryOption: (key: string) => void;
};

const useBlogCategoryStore = create<BlogCategoryStore>((set) => ({
  filterOption: "all",
  changeCategoryOption: (option: string) => set({ filterOption: option }),
}));

export { useBlogCategoryStore };
