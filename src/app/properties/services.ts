import supabase from "@/lib/utils/supabase/supabaseClient";
import { propertyFilterStore } from "@/store/properties/usePropertiesStore";
import { useOffsetInfiniteScrollQuery } from "@supabase-cache-helpers/postgrest-swr";
import { useQuery } from "@tanstack/react-query";

type Listing = {
  property: {
    id: number;
    is_verified: boolean;
    profiles: {
      id: number;
      is_certified: boolean;
    };
  };
} & MergedStandardTemplateView;

export const useFetchProperties = () => {
  const { searchString, filter } = propertyFilterStore();
  const formattedSearchString = formatString(searchString);

  let query = supabase
    .from("merged_standard_template_view")
    .select(
      "id, property_id, property!inner (id, is_verified, is_best_value, is_realtors_choice, profiles!inner (id, is_certified)), property_type, description, city, bedrooms, monthly_amount, advance_payment_options, favorite_user_id, subtitle, neighbourhood, advance_period, viewing_fee",
    )
    .order("property (is_verified)", { ascending: false })
    .order("property (is_realtors_choice)", { ascending: false })
    .order("property (is_best_value)", { ascending: false })
    // .order("property!inner (profiles (is_certified))", { ascending: false })
    .order("created_at", { ascending: false });
  if (searchString) {
    query = query.textSearch("query_string", `${formattedSearchString}`, {
      config: "english",
      type: "plain",
    });
  }

  if (filter === "realtor's choice") {
    query = query.is("property.is_realtors_choice", true);
  }
  if (filter === "verified") {
    query = query.is("property.is_verified", true);
  }
  if (filter === "no viewing fee") {
    query = query.is("viewing_fee", null);
  }
  if (filter === "no advance") {
    query = query.is("advance_period", null);
  }

  const result = useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return result;
};

export const useFetchFeaturedListings = () => {
  const query = useQuery({
    queryKey: ["featured_listing"],
    queryFn: async () => {
      const { data: listings } = await supabase
        .from("merged_standard_template_view")
        .select(
          "id, property_id, property!inner (id, is_verified, profiles!inner (id, is_certified)), property_type, description, city, bedrooms, monthly_amount, advance_payment_options, favorite_user_id, subtitle, neighbourhood, advance_period, viewing_fee",
        );
      return listings;
    },
  });

  return query;
};

const formatString = (str: string): string => {
  return str
    .replace(/[^\w\s]/gi, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
};
