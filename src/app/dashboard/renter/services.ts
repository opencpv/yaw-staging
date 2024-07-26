import { PROPERTY_DETAILS_SELECT_QUERY } from "@/constants";
import slugify from "@/lib/utils/slugify";
import supabase from "@/lib/utils/supabase/supabaseClient";
import {
  useOffsetInfiniteScrollQuery,
  useQuery,
} from "@supabase-cache-helpers/postgrest-swr";

export const useFetchRenterBookmarks = ({
  filter = "all",
  userId,
}: {
  filter: string;
  userId: string;
}) => {
  const formattedFilter = slugify(filter).toLowerCase();
  const { data: recentViews } = useFetchRecentViewsIds({ userId });

  let query = supabase
    .from("merged_property_view")
    .select(PROPERTY_DETAILS_SELECT_QUERY);

  if (formattedFilter === "recommendations") {
    query = query.limit(5);
  }
  if (formattedFilter === "recently-viewed") {
    query = query.in(
      "id",
      recentViews?.map((property) => property.property_id) || [],
    );
  }
  if (formattedFilter === "all") {
    // TODO: add recommendations
    query = query.in("id", [
      ...(recentViews?.map((property) => property.property_id) || []),
    ]);
  }

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateAll: true,
  });
};

const useFetchRecentViewsIds = ({ userId }: { userId: string }) => {
  const query = supabase
    .from("recently_viewed_properties")
    .select("property_id")
    .eq("user_id", userId);

  return useQuery(query);
};
