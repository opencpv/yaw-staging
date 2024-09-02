import { create } from "zustand";

export type FilterOption =
  | "All"
  | "Realtor's Choice"
  | "Verified"
  | "No Viewing Fee"
  | "No Advance";

export type FilterOptionArray = Array<FilterOption>;

type PropertyFilterStore = {
  searchString: string;
  setSearchString: (str: string) => void;
  filter: FilterOption;
  setFilter: (filter: FilterOption) => void;
};

type PropertiesPathStore = {
  previousPath: string | undefined;
  setPreviousPath: (path: string) => void;
};

export const propertyFilterStore = create<PropertyFilterStore>((set) => ({
  searchString: "",
  setSearchString: (str) => set((state) => ({ ...state, searchString: str })),
  filter: "All",
  setFilter: (filter) => set((state) => ({ ...state, filter })),
}));

export const propertiesPathStore = create<PropertiesPathStore>((set) => ({
  previousPath: undefined,
  setPreviousPath: (path) => set((state) => ({ ...state, previousPath: path })),
}));
