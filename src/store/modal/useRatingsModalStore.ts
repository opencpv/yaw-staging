import { create } from "zustand";

type RatingsModalStore = {
    openRatingsForm: boolean;
    setOpenRatingsForm: (val: boolean) => void;
    openAllRatings: boolean;
    setOpenAllRatings: (val: boolean) => void;
    currentProperty: any;
    setCurrentProperty: (property: any) => void;
    variant: "property"| "person"
    setVariant: (val: string) => void
};

export const useRatingsModalStore = create<RatingsModalStore>((set) => ({
    openRatingsForm: false,
    setOpenRatingsForm: (val: boolean) => set({ openRatingsForm: val }),
    openAllRatings: false,
    setOpenAllRatings: (val: boolean) => set({ openAllRatings: val }),
    currentProperty: null,
    setCurrentProperty: (property: any) => set({ currentProperty: property }),
    variant:"property",
    setVariant: (variant: any) => set({ variant: variant }),


}));
