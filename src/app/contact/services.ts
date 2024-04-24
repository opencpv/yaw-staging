import supabase from "@/lib/utils/supabase/supabaseClient";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchRandomFeaturedListings = () => {
  const query = supabase
    .from("random_featured_properties")
    .select(
      "id, is_best_value, is_realtors_choice, is_featured, is_verified, profiles!inner(id, is_certified), property_type, description, city, bedrooms, monthly_amount, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    )
    .eq("is_featured", true)
    .limit(3);

  return useQuery(query);
};
