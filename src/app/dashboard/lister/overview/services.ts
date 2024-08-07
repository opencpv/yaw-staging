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
    .match({ owner_uid: listerId, is_published: true, is_complete: true })
    .order("created_at", { ascending: false });

  const result = useQuery({
    queryKey: ["lister_listings", "lister_active_listings", listerId],
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
    .select(PROPERTY_DETAILS_SELECT_QUERY)
    .eq("owner_uid", listerId)
    .order("created_at", { ascending: false })
    .limit(3);

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
    .select("id, price, title, images, status")
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

export const useDeleteListing = () => {
  const queryClient = useQueryClient();
  const deleteListing = async (data: { id: number; owner_uid: string }) => {
    const { error } = await supabase
      .from("property")
      .delete()
      .match({ id: data.id, owner_uid: data.owner_uid });

    if (error) {
      throw new Error(error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: deleteListing,
    onSuccess: () => {
      toast.success("Property listing deleted successfully");
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["lister_listings"] });
    },
  });

  return mutation;
};

export const useAddListing = () => {
  const queryClient = useQueryClient();
  const addListing = async (data: Partial<Property>) => {
    const { error, data: listing } = await supabase
      .from("property")
      .upsert(data as Property)
      .eq("owner_uid", data.owner_uid as string)
      .select()
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    return listing;
  };

  const mutation = useMutation({
    mutationFn: addListing,
    onSuccess: (data, variables) => {
      toast.success(
        variables?.id
          ? "Property listing updated successfully."
          : "Property listing created successfully.",
      );
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["lister_listings"] });
    },
  });

  return mutation;
};
