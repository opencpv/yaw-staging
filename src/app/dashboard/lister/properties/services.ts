import { PROPERTY_DETAILS_SELECT_QUERY } from "@/constants";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useFetchAllListerProperties = ({
  listerId,
}: {
  listerId: string;
}) => {
  let query = supabase.from("property").select(PROPERTY_DETAILS_SELECT_QUERY)
  .eq("owner_uid", listerId)
  //.order("created_at", { ascending: false })
  .order("is_suspended", { ascending: false })

  const result = useQuery({
    queryKey: ["lister_listings", listerId],
    queryFn: async () => {
      const { data, error } = await query;
      if (error) {
        toast.error("Failed to fetch properties");
      }
      return data;
    },
    refetchOnMount: true,
  });

  return result;
};

export const useUpdatePropertyPublicationStatus = () => {
  const queryClient = useQueryClient();
  const updateCriteria = async (data: {
    id: number;
    owner_uid: string;
    is_published: boolean;
  }) => {
    let query = await supabase
      .from("property")
      .update({ is_published: data.is_published })
      .match({ id: data.id, owner_uid: data.owner_uid });

    if (query.error) {
      throw new Error(query.error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: updateCriteria,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["lister_listings"] });
    },
    onSuccess: (data, variables) => {
      toast.success(
        variables?.is_published
          ? "Property published successfully."
          : "Property unpublished successfully.",
      );
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
  });

  return mutation;
}


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
      queryClient.invalidateQueries({ queryKey: ["lister_listings"] });
      toast.success("Property deleted successfully.");
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
  });

  return mutation;
};
