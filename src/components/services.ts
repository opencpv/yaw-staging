import supabase from "@/lib/utils/supabase/supabaseClient";
import { revalidatePath } from "next/cache";

export const getUserFavorite = async (userId: string) => {
  const query = await supabase
    .from("user_favorite_properties")
    .select("user_id")
    .eq("user_id", userId)
    .limit(1)
    .maybeSingle();

  console.log(query.data);

  return query;
};
