import { create } from "zustand";

type ListingStore = {
  contactUponFavorite: boolean;
  setContactUponFavorite: (option: boolean) => void;
};

const useListingStore = create<ListingStore>((set) => ({
  contactUponFavorite: true,
  setContactUponFavorite: (option: boolean) => set({ contactUponFavorite: option }),
}));

export { useListingStore };
