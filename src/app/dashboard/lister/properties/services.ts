import supabase from "@/lib/utils/supabase/supabaseClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useFetchAllListerProperties = ({
  listerId,
  status,
  archived,
}: {
  listerId: string;
  status: string;
  archived: boolean;
}) => {
  let query = supabase.rpc("get_lister_properties", {
    user_id: listerId,
    status,
    archived,
  });
  const result = useQuery({
    queryKey: ["lister_listings", listerId, status, archived],
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
  const updatePublication = async (data: {
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
    mutationFn: updatePublication,
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
};

export const useHandleArchived = () => {
  // The property will be archived instead of deleted
  const queryClient = useQueryClient();
  const handleArchived = async (data: {
    id: number;
    owner_uid: string;
    is_archived: boolean;
  }) => {
    const { error } = await supabase
      .from("property")
      .update({ is_archived: !data.is_archived })
      .match({ id: data.id, owner_uid: data.owner_uid });

    if (error) {
      throw new Error(error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: handleArchived,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["lister_listings"] });
    },
    onSuccess: (data, variables) => {
      toast.success(
        variables?.is_archived
          ? "Property removed from archive successfully."
          : "Property archived successfully.",
      );
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
  });

  return mutation;
};
