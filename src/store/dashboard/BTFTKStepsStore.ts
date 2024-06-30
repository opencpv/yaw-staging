import { create } from "zustand";

type BTFTKStepsStore = {
  activeSlide: number;
  firstSlide: boolean;
  lastSlide: boolean;
  progressValue: number;
  /** The state of the modal */
  isOpen: boolean;
  shouldShowMotivationMessage: boolean;
  selectedSummaryPage: string;
  setProgressValue: (val: number) => void;
  setActiveSlide: (val: number) => void;
  setFirstSlide: (val: boolean) => void;
  setLastSlide: (val: boolean) => void;
  onOpen: () => void;
  onClose: () => void;
  setShouldShowMotivationMessage: (val: boolean) => void;
  setSelectedSummaryPage: (page: string) => void;
};

export const BTFTKStepsStore = create<BTFTKStepsStore>((set) => ({
  activeSlide: 0,
  firstSlide: true,
  lastSlide: false,
  progressValue: 1,
  isOpen: false,
  shouldShowMotivationMessage: true,
  selectedSummaryPage: "",
  setProgressValue: (val) => set((state) => ({ ...state, progressValue: val })),
  setActiveSlide: (val) => set((state) => ({ ...state, activeSlide: val })),
  setFirstSlide: (val) => set((state) => ({ ...state, firstSlide: val })),
  setLastSlide: (val) => set((state) => ({ ...state, lastSlide: val })),
  onOpen: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  onClose: () => set((state) => ({ ...state, isOpen: false })),
  setShouldShowMotivationMessage: (val) =>
    set((state) => ({
      ...state,
      shouldShowMotivationMessage: val,
    })),
  setSelectedSummaryPage: (page) =>
    set((state) => ({
      ...state,
      selectedSummaryPage: page,
    })),
}));
