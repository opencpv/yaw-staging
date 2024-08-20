import supabase from "@/lib/utils/supabase/supabaseClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useFetchBlockedUsers = ({ userId }: { userId: string }) => {
  const query = useQuery({
    queryKey: ["blocked_users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blocked_users")
        .select(
          "*, blocked_user:profiles!blocked_users_block_id_fkey(id, full_name, profile_img)",
        )
        .eq("blocker", userId as string);

      if (error) {
        toast.error("Failed to fetch blocked users.");
        throw new Error(error.message);
      }

      return data;
    },
  });
  return query;
};

export const useUnblockUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      blockerId,
      blockedId,
    }: {
      blockerId: string;
      blockedId: string;
    }) => {
      const { error } = await supabase
        .from("blocked_users")
        .delete()
        .match({ block_id: blockedId, blocker: blockerId });

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blocked_users"] });
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
  });

  return mutation;
};

export const useUnblockAllUsers = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ blockerId }: { blockerId: string }) => {
      const { error } = await supabase
        .from("blocked_users")
        .delete()
        .eq("blocker", blockerId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blocked_users"] });
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
  });

  return mutation;
};
