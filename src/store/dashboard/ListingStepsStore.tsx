import { formatDate } from "@/lib/utils/stringManipulation";
import { create } from "zustand";

type ListingStepsStoreType = {
  activeSlide: number;
  firstSlide: boolean;
  lastSlide: boolean;
  progressValue: number;
  isOpen: boolean;
  isOpenEditPage: boolean;
  shouldShowMotivationMessage: boolean;
  selectedSummaryPage: string;
  setProgressValue: (val: number) => void;
  setActiveSlide: (val: number) => void;
  setFirstSlide: (val: boolean) => void;
  setLastSlide: (val: boolean) => void;
  openCreatePage: () => void;
  closeCreatePage: () => void;
  openEditPage: () => void;
  closeEditPage: () => void;
  setShouldShowMotivationMessage: (val: boolean) => void;
  setSelectedSummaryPage: (page: string) => void;
  listing: Property | null;
  setListing: (listing: Property | null) => void;
};

export const ListingDefaultValues = {
  template_type: "STANDARD",
  property_type: "",
  suited_for: [],
  furnish_level: "Furnished",
  property_name: "",
  description: "",
  property_size: "",
  bedrooms: "1",
  bathrooms: "1",
  renter_knowledge: "",
  city: "Accra",
  neighbourhood: "Dansoman",
  available_date: formatDate(new Date().toISOString()),
  features: [],
  utilities: [],
  utilities_included: [],
  images: [],
  banner_image: {},
  total_amount: "",
  currency: "GHS",
  payment_terms: "Monthly",
  lease_duration: "Less than 1 year",
  require_refundable_security_deposit: "Yes",
  require_additional_fees: "No",
  refundable_security_deposit: "",
  additional_fees: [
    {
      fee_title: "",
      amount: "",
    },
  ],
  require_agent_fee: "Yes",
  require_viewing_fee: "Yes",
  agent_fee: "",
  viewing_fee: "",
};

export const ListingStepsStore = create<ListingStepsStoreType>((set) => ({
  activeSlide: 0,
  firstSlide: true,
  lastSlide: false,
  progressValue: 1,
  isOpen: false,
  isOpenEditPage: false,
  shouldShowMotivationMessage: true,
  selectedSummaryPage: "",
  listing: null,
  setProgressValue: (val) => set((state) => ({ ...state, progressValue: val })),
  setActiveSlide: (val) => set((state) => ({ ...state, activeSlide: val })),
  setFirstSlide: (val) => set((state) => ({ ...state, firstSlide: val })),
  setLastSlide: (val) => set((state) => ({ ...state, lastSlide: val })),
  openCreatePage: () => set((state) => ({ ...state, isOpen: true })),
  closeCreatePage: () => set((state) => ({ ...state, isOpen: false })),
  openEditPage: () => set((state) => ({ ...state, isOpenEditPage: true })),
  closeEditPage: () => set((state) => ({ ...state, isOpenEditPage: false })),
  setListing: (request) => set((state) => ({ ...state, listing: request })),
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
