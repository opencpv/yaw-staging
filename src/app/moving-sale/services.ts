import supabase from "@/lib/utils/supabase/supabaseClient";
import { useOffsetInfiniteScrollQuery } from "@supabase-cache-helpers/postgrest-swr";

export const useFetchItems = ({
  category = "",
  sort = "newest",
  condition = "",
  negotiation = "",
  priceRangeFrom = "",
  priceRangeTo = "",
}: {
  category: string;
  sort: string;
  condition: string;
  negotiation: string;
  priceRangeFrom: string;
  priceRangeTo: string;
}) => {
  console.log(
    category,
    sort,
    condition,
    negotiation,
    priceRangeFrom,
    priceRangeTo,
  );

  let query = supabase.from("products").select();

  if (category) {
    query = query.eq("category", category);
  }

  if (sort) {
    if (sort === "newest") {
      query = query.order("created_at", { ascending: false });
    } else if (sort === "price: high to low") {
      query = query.order("price", { ascending: false });
    } else if (sort === "price: low to high") {
      query = query.order("price");
    } else if (sort === "popular") {
      //
    }
  }

  if (condition) {
    query = query.eq("condition", condition);
  }

  if (negotiation) {
    query = query.eq("term", negotiation);
  }

  if (priceRangeFrom) {
    query = query.gte("price", parseFloat(priceRangeFrom));
  }

  if (priceRangeTo) {
    console.log(priceRangeTo);
    query = query.lte("price", parseFloat(priceRangeTo));
  }

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 12,
    revalidateAll: true,
  });
};
