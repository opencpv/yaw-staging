"use server";

import supabase from "@/lib/utils/supabase/supabaseClient";

export const updateItemViewCount = async (id: number) => {
  const { data: item } = await supabase
    .from("products")
    .select("views")
    .eq("id", id)
    .maybeSingle();

  console.log(item?.views);

  if (item) {
    const { error } = await supabase
      .from("products")
      .update({ views: item.views + 1 })
      .eq("id", id)
      .select("views");

    return error;
  }
};
