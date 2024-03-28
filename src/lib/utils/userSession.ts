import { supabase } from "@/supabase/client";
import { createClient } from "./supabase/client";

const userSession = async () => {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      return null;
    } else {
      if (data.session) {
        return data;
      } else {
        return null;
      }
    }
  } catch (error) {
    return null;
  }
};

export default userSession;
