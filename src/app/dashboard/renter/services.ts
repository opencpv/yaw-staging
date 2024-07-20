import slugify from "@/lib/utils/slugify";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useOffsetInfiniteScrollQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchRenterBookmarks = ({
  filter = "all",
  userId,
}: {
  filter: string;
  userId: string;
}) => {
  const formattedFilter = slugify(filter).toLowerCase();

  let query = supabase
    .from("merged_property_view")
    .select(
      "id, is_best_value, is_realtors_choice, is_featured, is_verified, is_lister_certified, profiles!inner(id, is_certified), property_type, description, city, bedrooms, monthly_amount, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    );

  if (formattedFilter === "favourites") {
    query = query.contains("favorite_user_ids", [userId]);
  }
  if (formattedFilter === "recommendations") {
    query = query;
  }
  if (formattedFilter === "recently-viewed") {
    query = query;
  }
  if (formattedFilter === "all") {
    // TODO: add btftk and recommendations filters
    query = query.contains("favorite_user_ids", [userId]);
  }

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateAll: true,
  });
};
