"use server";

import { createClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";

const supabase = createClient();

export const updateLikedProperty = async (
  userId: number | string,
  propertyId: number | string,
) => {
  let query;

  const { data } = await supabase
    .from("user_favorite_properties")
    .select("id")
    .eq("property_id", propertyId)
    .single();

  if (data) {
    // if property is already liked
    query = await supabase
      .from("user_favorite_properties")
      .delete()
      .eq("user_id", userId)
      .eq("property_id", propertyId)
      .select();
  } else {
    query = await supabase
      .from("user_favorite_properties")
      .insert({
        user_id: userId as string,
        property_id: propertyId as number,
      })
      .select();
  }

  //   revalidatePath("/properties");

  return query;
};
