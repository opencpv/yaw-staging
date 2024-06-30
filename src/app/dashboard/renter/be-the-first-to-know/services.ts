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

export const useFetchUserSearchCriteria = ({
  userId,
  onlyActive = true,
}: {
  userId: string;
  onlyActive?: boolean;
}) => {
  let query: any;

  if (onlyActive) {
    query = supabase
      .from("search_critieria")
      .select()
      .match({ renter_id: userId, is_active: true })
      .order("created_at", { ascending: false });
  } else {
    query = supabase
      .from("search_critieria")
      .select()
      .eq("renter_id", userId)
      .order("created_at", { ascending: false });
  }

  const result = useReactQuery<SearchCriteria[]>({
    queryKey: ["search_criteria", userId, onlyActive],
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
  id: string;
  userId: string;
}) => {
  const query = supabase
    .from("search_critieria")
    .select()
    .match({ id: id, is_active: true, renter_id: userId })
    .maybeSingle();

  return useQuery(query);
};

export const useFetchCriteriaMatches = ({
  userId,
  criterion,
}: {
  userId: string;
  criterion?: SearchCriteria;
}) => {
  const [matches, setMatches] = useState<number[]>([]);
  const { data: searchCriteria } = useFetchUserSearchCriteria({
    userId,
  });
  const { data: properties } = useFetchProperties();

  if (searchCriteria && properties) {
    for (let i = 0; i < searchCriteria.length; i++) {
      const criterion = searchCriteria[i];
      properties?.forEach((property) => {
        const locationMatches =
          (criterion.location?.toLowerCase() as string).includes(
            property?.city?.toLowerCase() as string,
          ) ||
          (criterion.location?.toLowerCase() as string).includes(
            property?.neighbourhood?.toLowerCase() as string,
          );
        const minPriceMatches =
          (property?.total_amount as number) >=
          (criterion?.min_price as number);
        const maxPriceMatches =
          (property?.total_amount as number) <=
          (criterion?.max_price as number);
        const minBedsMatches =
          (property?.bedrooms as number) >= (criterion?.min_beds as number);
        const maxBedsMatches =
          (property?.bedrooms as number) <= (criterion?.max_beds as number);
        const bathroomsMatches =
          (property?.bathrooms as number) >=
          (criterion?.min_bathrooms as number);

        if (
          locationMatches &&
          minPriceMatches &&
          maxPriceMatches &&
          minBedsMatches &&
          maxBedsMatches &&
          bathroomsMatches &&
          !matches.includes(property?.id as number)
        ) {
          setMatches((prev) => [...prev, property?.id as number]);
        }
      });
    }
  }

  let query;
  if (criterion) {
    const joinedLocation = criterion.location?.split(",").join(" or");

    query = supabase
      .from("merged_property_view")
      .select()
      .eq("id", 87)
      .limit(1);
    //.in("id", matches)
    //.textSearch("city", `${joinedLocation}`, { type: "websearch" })
    //.textSearch("neighbourhood", `${joinedLocation}`, { type: "websearch" })
    //.ilike("property_type", `%${criterion.property_type}%`)
    //.gte("total_amount", criterion.min_price)
    //.lte("total_amount", criterion.max_price)
    //.gte("bedrooms", criterion.min_beds)
    //.lte("bedrooms", criterion.max_beds)
    //.gte("min_bathrooms", criterion.min_bathrooms);
  } else {
    //query = supabase.from("merged_property_view").select().in("id", matches);
    query = supabase.from("merged_property_view").select().eq("id", 87);
  }
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
  const deleteCriteria = async (data: Partial<SearchCriteria>) => {
    const { error } = await supabase
      .from("search_critieria")
      .upsert(data as SearchCriteria)
      .match({ id: data.id, renter_id: data.renter_id });

    if (error) {
      throw new Error(error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: deleteCriteria,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["search_criteria"] });
      onToastOpen("Success!", "success");
    },
    onError: () => {
      onToastOpen("An error occurred. Please try again.", "error");
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

const useFetchProperties = () => {
  const query = supabase.from("merged_property_view").select();

  return useQuery(query);
};
