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
    .from("merged_property_view")
    .select(
      "id, is_best_value, is_realtors_choice, is_featured, is_verified, is_lister_certified, profiles!inner(id, is_certified), property_type, description, city, bedrooms, monthly_amount, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    )
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

export const useFetchFeaturedListings = () => {
  const query = supabase
    .from("merged_property_view")
    .select(
      "id, is_best_value, is_realtors_choice, is_featured, is_verified, profiles!inner(id, is_certified), property_type, description, city, bedrooms, monthly_amount, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    )
    .eq("is_featured", true)
    .order("is_verified", { ascending: false })
    .order("is_realtors_choice", { ascending: false })
    .order("is_best_value", { ascending: false })
    .order("profiles (is_certified)", { ascending: false })
    .order("created_at", { ascending: false });

  return useQuery(query);
};

export const useFetchRecommendedListings = () => {
  const query = supabase
    .from("merged_property_view")
    .select(
      "id, is_best_value, is_realtors_choice, is_featured, is_verified, profiles!inner(id, is_certified), property_type, description, city, bedrooms, monthly_amount, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    )
    // .eq("is_featured", true)
    .order("is_verified", { ascending: false })
    .order("is_realtors_choice", { ascending: false })
    .order("is_best_value", { ascending: false })
    .order("profiles (is_certified)", { ascending: false })
    .order("created_at", { ascending: false });

  return useQuery(query);
};

export const useFetchPropertyDetails = (propertyId: number) => {
  const query = supabase
    .from("merged_property_view")
    .select(
      "*, profiles!inner (id, full_name, avatar_url, profile_img, phone, whatsapp)",
    )
    .eq("id", propertyId)
    .single();

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
