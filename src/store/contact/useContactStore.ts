import { create } from "zustand";

type ContactTabActiveKey = "general" | "report" | "writers" | "advertise";

type ContactStore = {
  activeKey: ContactTabActiveKey
  setActiveKey: (key: ContactTabActiveKey) => void;
};

const useContactStore = create<ContactStore>((set) => ({
  activeKey: "general",
  setActiveKey: (key: ContactTabActiveKey) => set({ activeKey: key }),
}));

export { useContactStore };
