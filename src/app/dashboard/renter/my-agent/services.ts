import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchAgentRequests = ({ userId }: { userId: string }) => {
  let query = supabase
    .from("agent_request")
    .select()
    .eq("renter_id", userId)
    .order("is_active", { ascending: false });

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
