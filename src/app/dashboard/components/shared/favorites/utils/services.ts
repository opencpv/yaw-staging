import supabase from "@/lib/utils/supabase/supabaseClient";
import {
  useOffsetInfiniteScrollQuery,
  useQuery,
} from "@supabase-cache-helpers/postgrest-swr";

export const useFetchUserFavorites = (userId: string) => {
  const query = supabase
    .from("user_favorite_properties")
    .select(
      "id, standard_template!inner (id, is_property_verified, is_lister_certified, property_type, description, city, bedrooms, monthly_amount, advance_payment_options, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee, property!inner (id, is_best_value, is_realtors_choice, is_featured))",
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  const result = useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateAll: true,
  });

  return result;
};
