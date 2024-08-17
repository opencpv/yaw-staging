import { create } from "zustand";

type CustomerStore = {
  customer: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    customer_id: string;
    company: string;
    address: string;
    id: number;
  };
  setCustomer: (customer: CustomerStore["customer"]) => void;
};

export const customerStore = create<CustomerStore>((set) => ({
  customer: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    customer_id: "",
    company: "",
    address: "",
    id: 0,
  },
  setCustomer: (customer) => set({ customer }),
}));
