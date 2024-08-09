import { PROPERTY_DETAILS_SELECT_QUERY } from "@/constants";
import supabase from "@/lib/utils/supabase/supabaseClient";
import {
  useOffsetInfiniteScrollQuery,
  useQuery,
} from "@supabase-cache-helpers/postgrest-swr";

export const useFetchProperties = ({
  searchString = "",
  filter = "all",
}: {
  searchString: string;
  filter: string;
}) => {
  const formattedSearchString = formatString(searchString);

  let query = supabase
    .from("published_properties")
    .select(PROPERTY_DETAILS_SELECT_QUERY)
    .order("is_verified", { ascending: false })
    .order("is_realtors_choice", { ascending: false })
    .order("is_best_value", { ascending: false })
    .order("profiles (is_certified)", { ascending: false })
    .order("created_at", { ascending: false });
  if (searchString) {
    query = query.textSearch("query_string", `${formattedSearchString}`, {
      config: "english",
      type: "plain",
    });
  }

  if (filter === "realtor's choice") {
    query = query.or(`is_realtors_choice.eq.true, is_best_value.eq.true`);
  }
  if (filter === "verified") {
    query = query.or(`is_verified.eq.true, is_lister_certified.eq.true`);
  }
  if (filter === "no viewing fee") {
    query = query.is("viewing_fee", null);
  }
  if (filter === "no advance") {
    query = query.is("advance_period", null);
  }

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateAll: true,
  });
};

export const useFetchFeaturedListings = ({
  limit,
}: { limit?: number } = {}) => {
  const query = supabase.rpc("get_random_featured_properties", {
    limit_value: limit,
  });

  return useQuery(query);
};

export const useFetchRecommendedListings = () => {
  const query = supabase
    .from("published_properties")
    .select(PROPERTY_DETAILS_SELECT_QUERY)
    // .eq("is_featured", true)
    .order("is_verified", { ascending: false })
    .order("is_realtors_choice", { ascending: false })
    .order("is_best_value", { ascending: false })
    .order("profiles (is_certified)", { ascending: false })
    .order("created_at", { ascending: false });

  return useQuery(query);
};

const formatString = (str: string): string => {
  return str
    .replace(/[^\w\s]/gi, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
};
