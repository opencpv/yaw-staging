import supabase from "@/lib/utils/supabase/supabaseClient";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchInvoices = ({
  searchString = "",
}: {
  searchString: string;
}) => {
  let query = supabase
    .from("invoices")
    .select()
    .order("created_at", { ascending: false });

  if (searchString) {
    query = query.eq("id", searchString);
  }

  return useQuery(query);
};
