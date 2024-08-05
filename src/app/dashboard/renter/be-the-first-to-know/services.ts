import { PROPERTY_DETAILS_SELECT_QUERY } from "@/constants";
import supabase from "@/lib/utils/supabase/supabaseClient";
import {
  useOffsetInfiniteScrollQuery,
  useQuery,
} from "@supabase-cache-helpers/postgrest-swr";
import {
  useMutation,
  useQueryClient,
  useQuery as useReactQuery,
} from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

export const useFetchSearchCriteria = ({
  userId,
  status,
}: {
  userId: string;
  status?: string;
}) => {
  const matchStatus = status?.toLowerCase();

  let query = supabase.rpc("get_search_criteria", {
    status: matchStatus,
    user_id: userId,
  });

  const result = useReactQuery<SearchCriteria[]>({
    queryKey: ["search_criteria", userId, status],
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

export const useFetchSearchCriteriaById = ({
  id,
  userId,
}: {
  id: number;
  userId: string;
}) => {
  const query = supabase
    .from("search_critieria")
    .select("id, matched_properties")
    .match({ id: id, renter_id: userId })
    .maybeSingle();

  return useQuery(query);
};

export const useFetchCriteriaMatches = ({
  userId,
  criterionId,
}: {
  userId: string;
  criterionId?: number;
}) => {
  const [propertyIds, setPropertyIds] = useState<number[]>([]);
  const { data: searchCriteria } = useFetchSearchCriteria({
    userId,
  });
  const { data: searchCriterion } = useFetchSearchCriteriaById({
    id: criterionId as number,
    userId,
  });

  if (criterionId) {
    searchCriterion?.matched_properties?.map((property) => {
      if (!propertyIds.includes(property)) {
        setPropertyIds((prevIds) => [...prevIds, property]);
      }
    });
  } else {
    searchCriteria?.forEach((criterion) => {
      criterion.matched_properties?.map((property) => {
        if (!propertyIds.includes(property)) {
          setPropertyIds((prevIds) => [...prevIds, property]);
        }
      });
    });
  }

  let query = supabase
    .from("published_properties")
    .select(PROPERTY_DETAILS_SELECT_QUERY)
    .in("id", propertyIds);

  return useOffsetInfiniteScrollQuery(query);
};

export const useFetchCriteriaOverview = ({ userId }: { userId: string }) => {
  const propertiesIds: number[] = [];
  const images: string[] = [];

  const getSummary = async () => {
    const { data: criteria } = await supabase
      .from("search_critieria")
      .select("id, matched_properties, title")
      .eq("renter_id", userId)
      .not("match_modified_at", "is", null)
      .order("match_modified_at", { ascending: false })
      .limit(2);

    if (criteria) {
      criteria.forEach((criterion) => {
        propertiesIds.push(
          criterion.matched_properties! &&
            criterion.matched_properties[
              criterion.matched_properties &&
                criterion.matched_properties?.length - 1
            ],
        );
      });
    }

    const { data: properties } = await supabase
      .from("property")
      .select("id, images")
      .in("id", propertiesIds);

    if (properties) {
      properties.forEach((property) => {
        images.push(property.images?.[0] || "/images/placeholder.png"); // TODO: Look into default image
      });
    }

    const final_output = criteria?.map((criterion, index) => {
      return {
        criterion,
        associated_image: images[index],
      };
    });
    return final_output;
  };

  const query = useReactQuery({
    queryFn: getSummary,
    queryKey: ["search_criteria", "overview", userId],
  });

  return query;
};

export const useDeleteSearchCriteria = () => {
  const queryClient = useQueryClient();
  const deleteCriteria = async (data: { id: number; renter_id: string }) => {
    const { error } = await supabase
      .from("search_critieria")
      .delete()
      .match({ id: data.id, renter_id: data.renter_id });

    if (error) {
      throw new Error(error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: deleteCriteria,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["search_criteria"] });
      toast.success("Criterion deleted successfully.");
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
  });

  return mutation;
};

export const useAddSearchCriteria = () => {
  const queryClient = useQueryClient();
  const addCriteria = async (data: Partial<SearchCriteria>) => {
    const { error } = await supabase
      .from("search_critieria")
      .upsert(data as SearchCriteria)
      .match({ id: data.id, renter_id: data.renter_id });

    if (error) {
      throw new Error(error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: addCriteria,
    onSuccess: (data, variables) => {
      toast.success(
        variables?.id
          ? "Criterion updated successfully."
          : "Criterion created successfully.",
      );
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["search_criteria"] });
    },
  });

  return mutation;
};

export const useUpdateCriteriaStatus = () => {
  const queryClient = useQueryClient();
  const updateCriteria = async (data: {
    id: number;
    renter_id: string;
    is_active: boolean;
  }) => {
    let query;
    // reset created_at when the status is set to active
    if (data.is_active === true) {
      query = await supabase
        .from("search_critieria")
        .update({
          is_active: data.is_active,
          created_at: new Date().toISOString(),
        })
        .match({ id: data.id, renter_id: data.renter_id });
    } else {
      query = await supabase
        .from("search_critieria")
        .update({ is_active: data.is_active })
        .match({ id: data.id, renter_id: data.renter_id });
    }

    if (query.error) {
      console.log(query.error);
      throw new Error(query.error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: updateCriteria,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["search_criteria"] });
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
  });

  return mutation;
};
