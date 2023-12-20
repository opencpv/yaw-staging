import { create } from "zustand";

type useMessageStore = {
  recipientId: string | undefined;
  setRecipientId: (id: string | undefined) => void;
};

export const useMessageStore = create<useMessageStore>((set) => ({
  recipientId: undefined,
  setRecipientId: (id) => set({ recipientId: id }),
}));
