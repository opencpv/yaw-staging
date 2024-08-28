import { create } from "zustand";

export type ContactTabActiveKey =
  | "general"
  | "report"
  | "writers"
  | "advertise";

type ContactStore = {
  activeKey: ContactTabActiveKey;
  reportIssueHref: string;
  setReportIssueHref: (href: string) => void;
};

const tag = location.pathname?.split("/")[2] as ContactTabActiveKey;

const useContactStore = create<ContactStore>((set) => ({
  activeKey: "general",
  reportIssueHref: "",
  setReportIssueHref: (href: string) =>
    set((state) => ({ ...state, reportIssueHref: href })),
}));

export { useContactStore, tag };
