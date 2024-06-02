import { create } from "zustand";

type PdfDownloadStore = {
  downloadClassName: string;
  setDownloadClassName: (className: string) => void;
};

export const pdfDownloadStore = create<PdfDownloadStore>((set) => ({
  downloadClassName: "",
  setDownloadClassName: (className) =>
    set((state) => ({ ...state, downloadClassName: className })),
}));
