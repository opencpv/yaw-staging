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
  search_title: "",
  city: "",
  email: "",
  phone: "",
  property_type: [],
  features: [],
  location: [
    {
      city: "Accra",
      neighbourhood: "Dansoman",
    },
  ],
  min_price: "1000",
  max_price: "4000",
  min_beds: "1",
  max_beds: "1",
  min_bathrooms: "1",
  max_bathrooms: "1",
  min_lease: "1",
  max_lease: "1",
  preferred_payment_option: "Rent Advance",
  title: "Mrs.",
  age: "18 - 44",
  first_name: "",
  last_name: "",
  marital_status: "Single",
  tenants: "1 - 5",
  country: "Ghana",
  preferred_contact_method: "Email",
  employment_status: "Employed",
  employer: "",
  employer_country: "Ghana",
  monthly_income: "1000 - 2000",
  monthly_income_currency: "GHS",
  move_in_date: formatDate(new Date().toISOString()),
  current_address_1: "",
  current_address_2: "",
  moving_reason: "",
  evicted: "No",
  convicted: "No",
  has_pets: "No",
  has_vehicles: "No",
  job_title: "",
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
