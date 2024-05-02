import supabase from "@/lib/utils/supabase/supabaseClient";

export const getUserFavorite = async ({ userId }: { userId: string }) => {
  const query = await supabase
    .from("user_favorite_properties")
    .select("user_id")
    .eq("user_id", userId)
    .limit(1)
    .maybeSingle();

  return query;
};
