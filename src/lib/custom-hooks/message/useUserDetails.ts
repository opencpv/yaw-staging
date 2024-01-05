import supabase from "@/lib/utils/supabaseClient";
import { useEffect, useState } from "react";

export const useUserDetails = (id: string | undefined) => {
  const [userAvi, setUserAvi] = useState<string | null>("");
  const [userName, setUserName] = useState<string | null>("");

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data: user, error } = await supabase
          .from("profiles")
          .select("full_name, profile_img")
          .eq("id", id as string)
          .single();

        setUserAvi(user?.profile_img as string);
        setUserName(user?.full_name as string);
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    getDetails();
  }, [id]);

  return { userAvi, userName };
};
