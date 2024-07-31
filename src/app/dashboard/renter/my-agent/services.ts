import supabase from "@/lib/utils/supabase/supabaseClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useFetchAgentRequests = ({ userId }: { userId: string }) => {
  let query = supabase
    .from("agent_request")
    .select()
    .eq("renter_id", userId)
    .order("is_paid", { ascending: false })
    .order("created_at");

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
      .from("agent_request_matches")
      .select(
        "*, property!inner(id, images, bedrooms, property_type, city, monthly_amount)",
      )
      .eq("request_id", agentRequestId)
      .order("created_at", { ascending: false });

  const result = useQuery({
    queryKey: ["agent_requests", "matches", userId, agentRequestId],
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

export const fetchRequestMatchById = async ({
  id,
  renterId,
}: {
  id: number;
  renterId: string;
}) => {
  const { data, error } = await supabase
    .from("agent_request_matches")
    .select(
      "id, agent_request!inner(id, search_title, title, first_name, last_name, country, email, phone, renter_id), property!inner(id, city, bedrooms, property_type, monthly_amount, images, features_and_amenities)",
    )
    .eq("id", id)
    .eq("agent_request.renter_id", renterId)
    .maybeSingle();

  if (error) {
    console.log(error.message);
  }
  return data;
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
    queryKey: ["agent_requests", "overview", userId],
  });

  return query;
};

export const useDeleteAgentRequest = () => {
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
      toast.success("Agent Request deleted successfully");
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["agent_requests"] });
    },
  });

  return mutation;
};

export const useAddAgentRequest = () => {
  const queryClient = useQueryClient();
  const addAgentRequest = async (data: Partial<AgentRequest>) => {
    const { error, data: agentRequest } = await supabase
      .from("agent_request")
      .upsert(data as AgentRequest)
      .eq("renter_id", data.renter_id as string)
      .select()
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    return agentRequest;
  };

  const mutation = useMutation({
    mutationFn: addAgentRequest,
    onSuccess: (data, variables) => {
      toast.success(
        variables?.id
          ? "Agent Request updated successfully."
          : "Agent Request created successfully.",
      );
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["agent_requests"] });
    },
  });

  return mutation;
};
