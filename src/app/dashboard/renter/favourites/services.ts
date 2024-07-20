import { PROPERTY_DETAILS_SELECT_QUERY } from "@/constants";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useOffsetInfiniteScrollQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchUserFavorites = ({ userId }: { userId: string }) => {
  const query = supabase
    .from("merged_property_view")
    .select(
    PROPERTY_DETAILS_SELECT_QUERY
    )
    .contains("favorite_user_ids", [userId]);

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateAll: true,
    revalidateIfStale: true,
  });
};
