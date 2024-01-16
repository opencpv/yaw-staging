import React from "react";
import { create } from "zustand";

type BlogCategoryStore = {
  filterOption: React.Key;
  changeCategoryOption: (key: React.Key) => void;
};

type BlogPostSliderStore = {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
};

const useBlogCategoryStore = create<BlogCategoryStore>((set) => ({
  filterOption: "all",
  changeCategoryOption: (option) => set({ filterOption: option }),
}));

const useBlogPostSlider = create<BlogPostSliderStore>((set) => ({
  activeIndex: 0,
  setActiveIndex: (idx) => set({ activeIndex: idx }),
}));

export { useBlogCategoryStore, useBlogPostSlider };
