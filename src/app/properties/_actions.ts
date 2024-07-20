"use server";

import supabase from "@/lib/utils/supabase/supabaseClient";
import { revalidatePath } from "next/cache";

export const updateLikedProperty = async (
  userId: number | string,
  propertyId: number | string,
) => {
  let query;

  const { data } = await supabase
    .from("user_favorite_properties")
    .select("id")
    .match({ user_id: userId, property_id: propertyId })
    .single();

  if (data) {
    // if property is already liked
    query = await supabase
      .from("user_favorite_properties")
      .delete()
      .match({ user_id: userId, property_id: propertyId })
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
  
  revalidatePath("/dashboard/renter/favourites");

  return query;
};
