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
  sort = "Newest",
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
    ? categories.split(",").map((item) => capitalizeName(item))
    : undefined;

  const cleanedPriceFrom = extractNumericValue(priceRangeFrom);
  const cleanedPriceTo = extractNumericValue(priceRangeTo);

  let query = supabase.rpc("get_all_products", {
    categories: categoriesArray,
    sort: sort || undefined,
    product_condition: condition,
    product_term: term,
    price_from: Number(cleanedPriceFrom) || undefined,
    price_to: Number(cleanedPriceTo) || undefined,
  });

  return useOffsetInfiniteScrollQuery(query, {
    pageSize: 12,
    revalidateAll: true,
  });
};

export const useFetchItemDetails = ({ itemId }: { itemId: number }) => {
  const query = supabase.from("products").select().eq("id", itemId).single();

  return useQuery(query);
};

export const useFetchRelatedItems = ({
  category,
  id,
}: {
  category: string;
  id: number;
}) => {
  const query = supabase
    .from("products")
    .select("*, profiles!inner (id, full_name)")
    .eq("category", capitalizeName(category))
    .neq("id", id);

  return useQuery(query);
};

export const useFetchPopularItems = ({ id }: { id: number }) => {
  const query = supabase
    .from("products")
    .select("*, profiles!inner (id, full_name)")
    .neq("id", id)
    .order("views", { ascending: false })
    .limit(12);

  return useQuery(query);
};

export const extractNumericValue = (str: string) => {
  const cleanedString = str.replace(/[^0-9]/g, "");
  return cleanedString;
};
