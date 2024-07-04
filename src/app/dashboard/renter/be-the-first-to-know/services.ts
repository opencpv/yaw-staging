import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
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
    .from("merged_property_view")
    .select(
      "id, is_best_value, is_realtors_choice, is_featured, is_verified, is_lister_certified, profiles!inner(id, is_certified), property_type, description, city, bedrooms, monthly_amount, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    )
    .in("id", propertyIds);

  return useOffsetInfiniteScrollQuery(query);
};

export const useDeleteSearchCriteria = () => {
  const { onOpen: onToastOpen } = useToastDisclosure();

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
      onToastOpen("Criterion deleted successfully.", "success");
    },
    onError: () => {
      onToastOpen("An error occurred. Please try again.", "error");
    },
  });

  return mutation;
};

export const useAddSearchCriteria = () => {
  const { onOpen: onToastOpen } = useToastDisclosure();

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
    onSuccess: () => {
      onToastOpen("Success!", "success");
    },
    onError: () => {
      onToastOpen("An error occurred. Please try again.", "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["search_criteria"] });
    },
  });

  return mutation;
};

export const useUpdateCriteriaStatus = () => {
  const { onOpen: onToastOpen } = useToastDisclosure();

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
      onToastOpen("An error occurred. Please try again.", "error");
    },
  });

  return mutation;
};
