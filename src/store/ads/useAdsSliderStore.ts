import { create } from "zustand";

type AdsSliderStore = {
  autoplay: boolean;
  setAutoplay: (option: boolean) => void;
};

const useAdsSliderStore = create<AdsSliderStore>((set) => ({
  autoplay: true,
  setAutoplay: (option) => set({ autoplay: option }),
}));

export { useAdsSliderStore };
