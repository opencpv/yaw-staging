import { create } from "zustand";

type BTFTKStepsStore = {
  activeSlide: number;
  firstSlide: boolean;
  lastSlide: boolean;
  progressValue: number;
  isOpen: boolean;
  isOpenEditPage: boolean;
  shouldShowMotivationMessage: boolean;
  previousPath: string | null;
  setProgressValue: (val: number) => void;
  setActiveSlide: (val: number) => void;
  setFirstSlide: (val: boolean) => void;
  setLastSlide: (val: boolean) => void;
  onOpen: () => void;
  onClose: () => void;
  onOpenEditPage: () => void;
  onCloseEditPage: () => void;
  setShouldShowMotivationMessage: (val: boolean) => void;
  criterion: SearchCriteria | null;
  setCriterion: (criterion: SearchCriteria | null) => void;
  setPreviousPath: (path: string) => void;
};

export const BTFTKDefaultValues = {
  searchTitle: "",
  specialKeywords: "",
  location: [],
  email: "",
  whatsApp: "",
  priceRangeMinimum: "1000",
  priceRangeMaximum: "4000",
  bedMinimum: "1",
  bedMaximum: "1",
  bathroomMinimum: "1",
  bathroomMaximum: "1",
  preferredType: [],
  requiredFeatures: [],
  preferredMethodOfContact: "email",
};

export const BTFTKStepsStore = create<BTFTKStepsStore>((set) => ({
  activeSlide: 0,
  firstSlide: true,
  lastSlide: false,
  progressValue: 1,
  isOpen: false,
  isOpenEditPage: false,
  shouldShowMotivationMessage: true,
  criterion: null,
  previousPath: null,
  setProgressValue: (val) => set((state) => ({ ...state, progressValue: val })),
  setActiveSlide: (val) => set((state) => ({ ...state, activeSlide: val })),
  setFirstSlide: (val) => set((state) => ({ ...state, firstSlide: val })),
  setLastSlide: (val) => set((state) => ({ ...state, lastSlide: val })),
  onOpen: () => set((state) => ({ ...state, isOpen: true })),
  onClose: () => set((state) => ({ ...state, isOpen: false })),
  onOpenEditPage: () => set((state) => ({ ...state, isOpenEditPage: true })),
  onCloseEditPage: () => set((state) => ({ ...state, isOpenEditPage: false })),
  setCriterion: (criterion) => set((state) => ({ ...state, criterion })),
  setShouldShowMotivationMessage: (val) =>
    set((state) => ({
      ...state,
      shouldShowMotivationMessage: val,
    })),
  setPreviousPath: (path) => set((state) => ({ ...state, previousPath: path })),
}));
