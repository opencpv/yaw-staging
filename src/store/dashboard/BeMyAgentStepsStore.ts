import { create } from "zustand";
import { formatDate } from "@/lib/utils/stringManipulation";

type BeMyAgentStepsStore = {
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
  onOpen: () => void;
  onClose: () => void;
  onOpenEditPage: () => void;
  onCloseEditPage: () => void;
  setShouldShowMotivationMessage: (val: boolean) => void;
  setSelectedSummaryPage: (page: string) => void;
  agentRequest: AgentRequest | null;
  setAgentRequest: (request: AgentRequest | null) => void;
};

export const BeMyAgentDefaultValues = {
  searchTitle: "",
  city: "",
  email: "",
  whatsApp: "",
  preferredType: [],
  requiredFeatures: [],
  location: [
    {
      city: "Accra",
      neighbourhood: "Dansoman",
    },
  ],
  priceRangeMinimum: "1000",
  priceRangeMaximum: "4000",
  bedMinimum: "1",
  bedMaximum: "1",
  bathroomMinimum: "1",
  bathroomMaximum: "1",
  leaseTermMinimum: "1",
  leaseTermMaximum: "1",
  paymentOption: "Rent Advance",
  title: "Mrs.",
  age: "18 - 44",
  firstName: "",
  lastName: "",
  maritalStatus: "Single",
  tenants: "1 - 5",
  country: "Ghana",
  preferredMethodOfContact: "email",
  employmentStatus: "Employed",
  employer: "",
  employerCountry: "Ghana",
  monthlyIncome: "1000 - 2000",
  monthlyIncomeCurrency: "GHS",
  moveInDate: formatDate(new Date().toISOString()),
  currentAddress1: "",
  currentAddress2: "",
  purposeForMoving: "",
  evicted: "No",
  convicted: "No",
  hasPets: "No",
  hasVehicles: "No",
  jobTitle: "",
};

export const BeMyAgentStepsStore = create<BeMyAgentStepsStore>((set) => ({
  activeSlide: 0,
  firstSlide: true,
  lastSlide: false,
  progressValue: 1,
  isOpen: false,
  isOpenEditPage: false,
  shouldShowMotivationMessage: true,
  selectedSummaryPage: "",
  agentRequest: null,
  setProgressValue: (val) => set((state) => ({ ...state, progressValue: val })),
  setActiveSlide: (val) => set((state) => ({ ...state, activeSlide: val })),
  setFirstSlide: (val) => set((state) => ({ ...state, firstSlide: val })),
  setLastSlide: (val) => set((state) => ({ ...state, lastSlide: val })),
  onOpen: () => set((state) => ({ ...state, isOpen: true })),
  onClose: () => set((state) => ({ ...state, isOpen: false })),
  onOpenEditPage: () => set((state) => ({ ...state, isOpenEditPage: true })),
  onCloseEditPage: () => set((state) => ({ ...state, isOpenEditPage: false })),
  setAgentRequest: (request) =>
    set((state) => ({ ...state, agentRequest: request })),
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
