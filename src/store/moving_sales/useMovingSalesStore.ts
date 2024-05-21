import { create } from "zustand";

type Condition = "used" | "new" | "";
type Negotiation = "negotiable" | "non-negotiable" | "";

type ItemFilterStore = {
  categories: string[];
  condition: Condition;
  priceRangeFrom: string;
  priceRangeTo: string;
  negotiation: Negotiation;
  setCategories: (categories: string[]) => void;
  setCondition: (condition: Condition) => void;
  setPriceRangeFrom: (price: string) => void;
  setPriceRangeTo: (price: string) => void;
  setNegotiation: (negotiation: Negotiation) => void;
};

const useItemFilterStore = create<ItemFilterStore>((set) => ({
  categories: [],
  condition: "",
  priceRangeFrom: "",
  priceRangeTo: "",
  negotiation: "",
  setCategories: (categories) => set((state) => ({ ...state, categories })),
  setCondition: (condition) => set((state) => ({ ...state, condition })),
  setPriceRangeFrom: (priceRangeFrom) =>
    set((state) => ({ ...state, priceRangeFrom })),
  setPriceRangeTo: (priceRangeTo) =>
    set((state) => ({ ...state, priceRangeTo })),
  setNegotiation: (negotiation) => set((state) => ({ ...state, negotiation })),
}));

export { useItemFilterStore };
