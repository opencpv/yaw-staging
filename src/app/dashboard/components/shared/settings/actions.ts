"use server";

import supabase from "@/lib/utils/supabase/supabaseClient";
import { revalidatePath } from "next/cache";

export const unblockUser = async ({
  blockedId,
  userId: blockerId,
}: {
  userId: string;
  blockedId: string;
}) => {
  const { error } = await supabase
    .from("blocked_users")
    .delete()
    .match({ blocked_id: blockedId, blocker_id: blockerId });

  revalidatePath("/dashboard/renter/settings");
  return { error };
};

export const unblockAllUsers = async ({ blockerId }: { blockerId: string }) => {
  const { error } = await supabase
    .from("blocked_users")
    .delete()
    .eq("blocker_id", blockerId);

  revalidatePath("/dashboard/renter/settings");
  return { error };
};
