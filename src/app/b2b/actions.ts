"use server";

import { redirect } from "next/navigation";

export const handleCustomerIdSubmit = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const customerId = formData.get("customer-id");
  if (customerId) {
    redirect(`/b2b/data`);
  }
};
