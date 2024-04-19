"use server";

import supabase from "@/lib/utils/supabase/supabaseClient";

export const handleFavoriteDialogSave = async (
  userId: string,
  shouldBeContacted: boolean,
) => {
  let query;
  const { data: user } = await supabase
    .from("contact_owner_preference")
    .select("id")
    .eq("user_id", userId)
    .limit(1)
    .maybeSingle();

  if (user) {
    query = await supabase
      .from("contact_owner_preference")
      .update({ should_be_contacted: shouldBeContacted })
      .eq("id", user.id)
      .select("id");
  } else {
    query = await supabase
      .from("contact_owner_preference")
      .insert({ user_id: userId, should_be_contacted: shouldBeContacted })
      .select("id");
  }

  return query;
};
