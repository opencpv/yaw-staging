import { create } from "zustand";

type CarouselStore = {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
};

export type FilterOption =
  | "all"
  | "realtor's choice"
  | "verified"
  | "no viewing fee"
  | "no advance";

export type FilterOptionArray = Array<FilterOption>;

type PropertyFilterStore = {
  searchString: string;
  setSearchString: (str: string) => void;
  filter: FilterOption;
  setFilter: (filter: FilterOption) => void;
};

export const carouselStore = create<CarouselStore>((set) => ({
  activeIndex: 0,
  setActiveIndex: (idx) => set({ activeIndex: idx }),
}));

export const propertyFilterStore = create<PropertyFilterStore>((set) => ({
  searchString: "",
  setSearchString: (str) => set((state) => ({ ...state, searchString: str })),
  filter: "all",
  setFilter: (filter) => set((state) => ({ ...state, filter })),
}));
