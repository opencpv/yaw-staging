import supabase from "@/lib/utils/supabase/supabaseClient";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchInvoices = ({
  searchString = "",
  customerId = "",
  filter = "All",
}: {
  searchString: string;
  customerId: string;
  filter: "All" | "Paid" | "Pending";
}) => {
  let query = supabase
    .from("invoices")
    .select()
    .eq("customer", customerId)
    .order("created_at", { ascending: false });

  if (searchString) {
    query = query.eq("id", searchString);
  }

  if (filter !== "All") {
    query = query.eq("is_paid", filter === "Paid");
  }

  return useQuery(query);
};

export const useFetchReceipts = ({
  searchString = "",
  customerId = "",
}: {
  searchString: string;
  customerId: string;
}) => {
  let query = supabase
    .from("invoices")
    .select()
    .match({ customer: customerId, is_paid: true })
    .order("created_at", { ascending: false });

  if (searchString) {
    query = query.eq("id", searchString);
  }

  return useQuery(query);
};
