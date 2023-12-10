import { create } from "zustand";

type Condition = "used" | "new" | null;
type Categories = string[];
type Negotiation = "negotiable" | "non-negotiable" | null;

type ItemFilterStore = {
  categories: string[];
  condition: Condition;
  priceRangeFrom: string;
  priceRangeTo: string;
  negotiation: Negotiation;
  setCategories: (categories: Categories) => void;
  setCondition: (condition: Condition) => void;
  setPriceRangeFrom: (price: string) => void;
  setPriceRangeTo: (price: string) => void;
  setNegotiation: (negotiation: Negotiation) => void;
};

const useItemFilterStore = create<ItemFilterStore>((set) => ({
  categories: [],
  condition: null,
  priceRangeFrom: "",
  priceRangeTo: "",
  negotiation: null,
  setCategories: (categories) => set((state) => ({ ...state, categories })),
  setCondition: (condition) => set((state) => ({ ...state, condition })),
  setPriceRangeFrom: (priceRangeFrom) =>
    set((state) => ({ ...state, priceRangeFrom })),
  setPriceRangeTo: (priceRangeTo) =>
    set((state) => ({ ...state, priceRangeTo })),
  setNegotiation: (negotiation) => set((state) => ({ ...state, negotiation })),
}));

export { useItemFilterStore };
