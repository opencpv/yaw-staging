"use server";

import supabase from "@/lib/utils/supabaseClient";

export const getListings = async () => {
  const { data, error } = await supabase.from("standard_template").select("*");
  if (error) {
    throw error;
  }
  return data;
};
