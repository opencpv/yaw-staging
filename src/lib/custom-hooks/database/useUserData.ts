import { createClient } from "@/lib/utils/supabase/auth/client";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useEffect, useState } from "react";

export const useUserData = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAppStore();

  useEffect(() => {
    const supabase = createClient();
    const getUserData = async () => {
      setLoading(true);
      const session = JSON.parse(localStorage.getItem("session") as string);
      try {
        // let { data: userDetails } = await supabase?.auth?.getUser(
        //   session?.access_token,
        // );
        let { data: userDetails } = await supabase?.auth?.getUser();
        let { data: profiles, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", userDetails?.user?.id as string);
        let { data: userPreference } = await supabase
          .from("contact_owner_preference")
          .select("should_be_contacted")
          .eq("user_id", userDetails?.user?.id as string)
          .limit(1)
          .single();

        const profileData = {
          ...(profiles && profiles[0]),
          email: userDetails?.user?.email,
          shouldBeContacted: userPreference?.should_be_contacted,
        };
        if (userDetails.user) {
          setUser(profileData);
        } else {
          setUser(null); // prevents creating a user object with email
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, [setUser]);

  return { loading };
};
