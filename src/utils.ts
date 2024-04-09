import { cache } from "react";
import { createClient } from "./lib/utils/supabase/auth/server";

export const getPopularCities = async () => {
  const supabase = createClient();
  const { data: cities } = await supabase
    .from("standard_template") // just using as a placeholder
    .select("id");

  return cities;
};
