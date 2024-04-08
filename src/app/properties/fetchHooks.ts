import { createClient } from "@/lib/utils/supabase/client";
import { propertyFilterStore } from "@/store/properties/usePropertiesStore";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const supabase = createClient();

export const useFetchProperties = () => {
  const { searchString, filter } = propertyFilterStore();

  const query = useQuery({
    queryKey: ["listings", searchString, filter],
    queryFn: async () => {
      let query = supabase
        .from("merged_properties_view")
        .select()
        .order("created_at", { ascending: false });
      if (searchString) {
        query = query.textSearch("query_string", `${searchString}`, {
          config: "english",
          type: "plain",
        });
      }
      if (filter === "realtor's choice") {
        query = query;
      }
      if (filter === "verified") {
        query = query;
      }
      if (filter === "no viewing fee") {
        query = query.eq("viewing_fee", 0);
      }

      const { data: listings } = await query;
      return listings;
    },
  });

  return query;
};

export const useFetchProperties2 = () => {
  const { searchString, filter } = propertyFilterStore();

  const query = useInfiniteQuery({
    queryKey: ["listings", searchString, filter],
    queryFn: async () => {
      let query = supabase
        .from("merged_properties_view")
        .select()
        .order("created_at", { ascending: false });
      if (searchString) {
        query = query.textSearch("query_string", `${searchString}`, {
          config: "english",
          type: "plain",
        });
      }
      if (filter === "realtor's choice") {
        query = query;
      }
      if (filter === "verified") {
        query = query;
      }
      if (filter === "no viewing fee") {
        query = query.eq("viewing_fee", 0);
      }

      const { data: listings } = await query;
      return listings;
    },
    initialPageParam: 0,
    // maxPages: 3,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage?.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });

  return query;
};
