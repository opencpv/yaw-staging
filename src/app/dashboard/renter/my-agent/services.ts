import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchAgentRequests = ({ userId }: { userId: string }) => {
  let query = supabase
    .from("agent_request")
    .select()
    .eq("renter_id", userId)
    .order("is_paid", { ascending: false });

  const result = useQuery({
    queryKey: ["agent_requests", userId],
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

export const useFetchAgentRequestById = ({
  id,
  userId,
}: {
  id: number;
  userId: string;
}) => {
  const query = supabase
    .from("agent_request")
    .select("id, matched_properties, search_title")
    .match({ id: id, renter_id: userId })
    .maybeSingle();

  const result = useQuery({
    queryKey: ["agent_request", userId, id],
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

export const useFetchAgentRequestMatches = ({
  userId,
  agentRequestId,
}: {
  userId: string;
  agentRequestId: number;
}) => {
  const { data: agentRequest } = useFetchAgentRequestById({
    id: agentRequestId as number,
    userId,
  });

  let query: any; // TODO: fix type

  if (agentRequest)
    query = supabase
      .from("merged_property_view")
      .select("*, profiles!inner(id, is_certified)")
      .in("id", (agentRequest?.matched_properties as number[]) || []);

  const result = useQuery({
    queryKey: ["agent_request_matches", userId, agentRequestId],
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

export const useFetchAgentRequestOverview = ({
  userId,
}: {
  userId: string;
}) => {
  const propertiesIds: number[] = [];
  const images: string[] = [];

  const getSummary = async () => {
    const { data: requests } = await supabase
      .from("agent_request")
      .select("id, matched_properties, search_title")
      .eq("renter_id", userId)
      .not("match_modified_at", "is", null)
      .order("match_modified_at", { ascending: false })
      .limit(2);

    if (requests) {
      requests.forEach((request) => {
        propertiesIds.push(
          request.matched_properties! &&
            request.matched_properties[
              request.matched_properties &&
                request.matched_properties?.length - 1
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

    const final_output = requests?.map((request, index) => {
      return {
        request: request,
        associated_image: images[index],
      };
    });
    return final_output;
  };

  const query = useQuery({
    queryFn: getSummary,
    queryKey: ["agent_request_overview", userId],
  });

  return query;
};

export const useDeleteAgentRequest = () => {
  const { onOpen: onToastOpen } = useToastDisclosure();

  const queryClient = useQueryClient();
  const deleteAgentRequest = async (data: {
    id: number;
    renter_id: string;
  }) => {
    const { error } = await supabase
      .from("agent_request")
      .delete()
      .match({ id: data.id, renter_id: data.renter_id });

    if (error) {
      throw new Error(error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: deleteAgentRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["agent_requests"] });
      onToastOpen("Agent Request deleted successfully.", "success");
    },
    onError: () => {
      onToastOpen("An error occurred. Please try again.", "error");
    },
  });

  return mutation;
};

export const useAddAgentRequest = () => {
  const { onOpen: onToastOpen } = useToastDisclosure();

  const queryClient = useQueryClient();
  const addAgentRequest = async (data: Partial<AgentRequest>) => {
    const { error, data: agentRequest } = await supabase
      .from("agent_request")
      .upsert(data as AgentRequest)
      .match({ id: data.id, renter_id: data.renter_id })
      .select()
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    return agentRequest;
  };

  const mutation = useMutation({
    mutationFn: addAgentRequest,
    onSuccess: () => {
      onToastOpen("Success!", "success");
    },
    onError: () => {
      onToastOpen("An error occurred. Please try again.", "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["agent_requests"] });
    },
  });

  return mutation;
};
