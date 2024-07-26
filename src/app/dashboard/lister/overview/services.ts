import { PROPERTY_DETAILS_SELECT_QUERY } from "@/constants";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useFetchListerActiveListings = ({
  listerId,
}: {
  listerId: string;
}) => {
  let query = supabase
    .from("property")
    .select(PROPERTY_DETAILS_SELECT_QUERY)
    .match({ owner_uid: listerId, is_published: true })
    .order("created_at", { ascending: false });

  const result = useQuery({
    queryKey: ["lister_active_listings", listerId],
    queryFn: async () => {
      const { data, error } = await query;
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    refetchOnMount: true,
  });

  return result;
};

export const useFetchListerListings = ({ listerId }: { listerId: string }) => {
  let query = supabase
    .from("property")
    .select("created_at, bedrooms, id, images, property_type, city")
    .eq("owner_uid", listerId)
    .order("created_at", { ascending: false });

  const result = useQuery({
    queryKey: ["lister_listings", listerId],
    queryFn: async () => {
      const { data, error } = await query;
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    refetchOnMount: true,
  });

  return result;
};

export const useFetchListerItems = ({ listerId }: { listerId: string }) => {
  let query = supabase
    .from("products")
    .select("id, price, title, images")
    .eq("seller", listerId)
    .order("created_at", { ascending: false });

  const result = useQuery({
    queryKey: ["lister_items", listerId],
    queryFn: async () => {
      const { data, error } = await query;
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    refetchOnMount: true,
  });

  return result;
};
