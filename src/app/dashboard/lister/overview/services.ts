import { PROPERTY_DETAILS_SELECT_QUERY } from "@/constants";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
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
    .match({ owner_uid: listerId, is_archived: false, is_suspended: false })
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

export const useFetchListerLeads = async ({
  listerId,
}: {
  listerId: string;
}) => {
  const [preferredIds, setPreferredIds] = React.useState<string[]>([]);

  // Get from the preference table, the users who want to be contacted.
  const { data: preference } = await supabase
    .from("contact_owner_preference")
    .select("profiles!inner (id)")
    .eq("should_be_contacted", true);

  if (preference)
    (preference as any)?.map(
      (p: any) =>
        !preferredIds?.includes(p.profiles.id) &&
        setPreferredIds((ids) => [...ids, p.profiles.id]),
    );

  // Get properties where those who have favorited
  // are included in the list of users who want to be contacted,
  // and where the owner is the current user (lister).
  const { data: standardTemplate } = await supabase
    .from("published_properties")
    .select("id, profiles!inner (id), favorite_user_ids")
    .overlaps("favorite_user_ids", preferredIds as string[])
    .eq("profiles.id", listerId);

  const [ids, setIds] = React.useState<string[]>([]);
  standardTemplate?.map((st) =>
    st.favorite_user_ids?.map(
      (id: any) =>
        preferredIds?.includes(id) &&
        !ids?.includes(id) &&
        setIds((ids) => [...ids, id]),
    ),
  );

  // Finally get the details of users who want to be contacted
  const query = supabase
    .from("profiles")
    .select("id, full_name, profile_img, phone, whatsapp")
    .in("id", [...ids]);

  const result = useQuery({
    queryKey: ["lister_leads", listerId],
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
