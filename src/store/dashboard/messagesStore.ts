import { create } from "zustand";

type MessageStore = {
  recipientId: string;
  setRecipientId: (id: string) => void;
};

const useMessagesStore = create<MessageStore>((set) => ({
  recipientId: "",
  setRecipientId: (id: string) => set({ recipientId: id }),
}));

export { useMessagesStore };
