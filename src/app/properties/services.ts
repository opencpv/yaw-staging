import supabase from "@/lib/utils/supabase/supabaseClient";
import { propertyFilterStore } from "@/store/properties/usePropertiesStore";
import { useOffsetInfiniteScrollQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchProperties = () => {
  const { searchString, filter } = propertyFilterStore();

  let query = supabase
    .from("merged_properties_view")
    .select(
      "id, property_id, property_type, description, city, bedrooms, monthly_amount, advance_payment_options, favorite_user_id, subtitle, neighbourhood, advance_period",
    )
    .order("created_at", { ascending: false });
  if (searchString) {
    query = query.textSearch("query_string", `${searchString}`, {
      config: "english",
      type: "plain",
    });
  }
  if (filter === "realtor's choice") {
    query = query;
  }
  if (filter === "verified") {
    query = query;
  }
  if (filter === "no viewing fee") {
    query = query.eq("viewing_fee", 0);
  }

  const result = useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return result;
};
