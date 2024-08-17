import { create } from "zustand";

type ContactTabActiveKey = "general" | "report" | "writers" | "advertise";

type ContactStore = {
  activeKey: ContactTabActiveKey;
  reportIssueHref: string;
  setActiveKey: (key: ContactTabActiveKey) => void;
  setReportIssueHref: (href: string) => void;
};

const useContactStore = create<ContactStore>((set) => ({
  activeKey: "general",
  reportIssueHref: "",
  setActiveKey: (key: ContactTabActiveKey) =>
    set((state) => ({ ...state, activeKey: key })),
  setReportIssueHref: (href: string) =>
    set((state) => ({ ...state, reportIssueHref: href })),
}));

export { useContactStore };
