import { create } from "zustand";

type Condition = "used" | "new" | "all" | "used-like new";
type Term = "negotiable" | "non-negotiable" | "all";

type ItemFilterStore = {
  categories: string[];
  condition: Condition;
  priceRangeFrom: string;
  priceRangeTo: string;
  term: Term;
  isChangeDetected: boolean;
  setCategories: (categories: string[]) => void;
  setCondition: (condition: Condition) => void;
  setPriceRangeFrom: (price: string) => void;
  setPriceRangeTo: (price: string) => void;
  setTerm: (term: Term) => void;
  setChangeDetected: (isChangeDetected: boolean) => void;
  clearAll: () => void;
};

type ItemPathStore = {
  previousPath: string | undefined;
  setPreviousPath: (path: string) => void;
};

const useItemFilterStore = create<ItemFilterStore>((set) => ({
  categories: [],
  condition: "all",
  priceRangeFrom: "",
  priceRangeTo: "",
  term: "all",
  isChangeDetected: false,
  setCategories: (categories) =>
    set((state) => ({ ...state, categories, isChangeDetected: true })),
  setCondition: (condition) =>
    set((state) => ({ ...state, condition, isChangeDetected: true })),
  setPriceRangeFrom: (priceRangeFrom) =>
    set((state) => ({ ...state, priceRangeFrom, isChangeDetected: true })),
  setPriceRangeTo: (priceRangeTo) =>
    set((state) => ({ ...state, priceRangeTo, isChangeDetected: true })),
  setTerm: (term) =>
    set((state) => ({ ...state, term, isChangeDetected: true })),
  setChangeDetected: (isChangeDetected) =>
    set((state) => ({ ...state, isChangeDetected })),
  clearAll: () =>
    set((state) => ({
      ...state,
      categories: [],
      condition: "all",
      priceRangeFrom: "",
      priceRangeTo: "",
      term: "all",
      isChangeDetected: false,
    })),
}));

export { useItemFilterStore };

export const useItemPathStore = create<ItemPathStore>((set) => ({
  previousPath: undefined,
  setPreviousPath: (path) => set((state) => ({ ...state, previousPath: path })),
}));
