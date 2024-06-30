"use server";

import supabase from "@/lib/utils/supabase/supabaseClient";

export const deleteCriteria = async (criteriaId: number, userId: string) => {
  const { error } = await supabase
    .from("search_critieria")
    .delete()
    .match({ id: criteriaId, renter_id: userId });

  return { error };
};
