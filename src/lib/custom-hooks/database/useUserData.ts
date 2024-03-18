import { useAppStore } from "@/store/dashboard/AppStore";
import { supabase } from "@/supabase/client";
import { useEffect, useState } from "react";

export const useUserData = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAppStore();

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const session = JSON.parse(localStorage.getItem("session") as string);
      try {
        let { data } = await supabase?.auth?.getUser(session?.access_token);
        let { data: profiles, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", data?.user?.id as string);
        const profileData = {
          ...(profiles && profiles[0]),
          email: data?.user?.email,
        };
        setUser(profileData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, [setUser]);
};
