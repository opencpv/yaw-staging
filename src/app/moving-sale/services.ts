import supabase from "@/lib/utils/supabase/supabaseClient";
import {
  useOffsetInfiniteScrollQuery,
  useQuery,
} from "@supabase-cache-helpers/postgrest-swr";

export const useFetchItemCategories = () => {
  const query = supabase.from("product_category").select("category");

  return useQuery(query);
};

export const useFetchItems = ({
  categories = "",
  sort = "newest",
  condition = "",
  negotiation = "",
  priceRangeFrom = "",
  priceRangeTo = "",
}: {
  sort: string;
  condition: string;
  negotiation: string;
  priceRangeFrom: string;
  priceRangeTo: string;
  categories: string;
}) => {
  const categoriesArray = categories
    .split(",")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

  let query = supabase
    .from("products")
    .select(
      "id, title, description, price, condition, category, term, profiles!inner (id, full_name)",
    );

  if (categories) {
    query = query.in("category", categoriesArray);
  }

  if (sort) {
    if (sort === "newest") {
      query = query.order("created_at", { ascending: false });
    } else if (sort === "price: high to low") {
      query = query.order("price", { ascending: false });
    } else if (sort === "price: low to high") {
      query = query.order("price");
    } else if (sort === "popular") {
      query = query.order("views", { ascending: false });
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
    query = query.lte("price", parseFloat(priceRangeTo));
  }

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 12,
    revalidateAll: true,
  });
};

export const useFetchItemDetails = ({ itemId }: { itemId: number }) => {
  const query = supabase
    .from("products")
    .select("*, profiles!inner (id)")
    .eq("id", itemId)
    .single();

  return useQuery(query);
};
