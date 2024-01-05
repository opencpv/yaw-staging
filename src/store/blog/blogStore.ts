import { create } from "zustand";

type BlogCategoryStore = {
  filterOption: string;
  changeCategoryOption: (key: string) => void;
};

type BlogPostSliderStore = {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
};

const useBlogCategoryStore = create<BlogCategoryStore>((set) => ({
  filterOption: "all",
  changeCategoryOption: (option: string) => set({ filterOption: option }),
}));

const useBlogPostSlider = create<BlogPostSliderStore>((set) => ({
  activeIndex: 0,
  setActiveIndex: (idx) => set({ activeIndex: idx }),
}));

export { useBlogCategoryStore, useBlogPostSlider };
