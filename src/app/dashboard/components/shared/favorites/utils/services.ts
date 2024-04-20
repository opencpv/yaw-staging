import supabase from "@/lib/utils/supabase/supabaseClient";
import { useOffsetInfiniteScrollQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchUserFavorites = (userId: string) => {
  const query = supabase
    .from("merged_property_view")
    .select(
      "id, is_best_value, is_realtors_choice, is_featured, is_verified, profiles!inner(id, is_certified), property_type, description, city, bedrooms, monthly_amount, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    )
    .contains("favorite_user_ids", [userId]);

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateAll: true,
  });
};
