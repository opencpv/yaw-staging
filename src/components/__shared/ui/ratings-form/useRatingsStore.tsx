import create from 'zustand';

interface RatingsStore {
  activeTab: number;
  setActiveTab: (tabIndex: number) => void;
}

const useRatingsStore = create<RatingsStore>((set) => ({
  activeTab: 0, // Default value for activeTab
  setActiveTab: (tabIndex) => set({ activeTab: tabIndex }),
}));

export default useRatingsStore;
