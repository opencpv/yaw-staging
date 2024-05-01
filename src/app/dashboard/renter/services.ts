import supabase from "@/lib/utils/supabase/supabaseClient";
import { useOffsetInfiniteScrollQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchRenterBookmarks = ({
  filter = "favourites",
  userId,
}: {
  filter: string;
  userId: string;
}) => {
  let query = supabase
    .from("merged_property_view")
    .select(
      "id, is_best_value, is_realtors_choice, is_featured, is_verified, is_lister_certified, profiles!inner(id, is_certified), property_type, description, city, bedrooms, monthly_amount, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    );

  if (filter === "favourites") {
    query = query.contains("favorite_user_ids", [userId]);
  }
  if (filter === "be the first to know") {
    query = query;
  }
  if (filter === "recommendations") {
    query = query;
  }
  if (filter === "all") {
    // TODO: add btftk and recommendations filters
    query = query.contains("favorite_user_ids", [userId]);
  }

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateAll: true,
  });
};
