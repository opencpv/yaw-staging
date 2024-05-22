import capitalizeName from "@/lib/utils/stringManipulation";
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
  term = "",
  priceRangeFrom = "",
  priceRangeTo = "",
}: {
  sort: string;
  condition: string;
  term: string;
  priceRangeFrom: string;
  priceRangeTo: string;
  categories: string;
}) => {
  const categoriesArray = categories
    .split(",")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

  const cleanedPriceFrom = extractNumericValue(priceRangeFrom);
  const cleanedPriceTo = extractNumericValue(priceRangeTo);

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

  if (condition && condition !== "all") {
    query = query.eq("condition", capitalizeName(condition));
  }

  if (term && term !== "all") {
    query = query.eq("term", capitalizeName(term));
  }

  if (priceRangeFrom) {
    query = query.gte("price", parseFloat(cleanedPriceFrom));
  }

  if (priceRangeTo) {
    query = query.lte("price", parseFloat(cleanedPriceTo));
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

export const extractNumericValue = (str: string) => {
  const cleanedString = str.replace(/[^0-9]/g, "");
  return cleanedString;
};
