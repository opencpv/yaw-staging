"use server";

import supabase from "@/lib/utils/supabase/supabaseClient";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleCustomerIdSubmit = async (formData: FormData) => {
  const customerId = formData.get("customer-id");

  const { data: customer, error } = await supabase
    .from("customers")
    .select("customer_id")
    .eq("customer_id", customerId as string)
    .maybeSingle();

  if (error) {
    return { message: "Something went wrong" };
  }

  if (!customer) {
    return { message: "Invalid Customer ID" };
  }

  cookies().set({
    name: "ycust-id",
    value: customer.customer_id,
    path: "/b2b/data",
    maxAge: 1 * 60,
  });
  redirect(`/b2b/data`);
};
