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
          .eq("id", userDetails?.user?.id as string)
          .maybeSingle();
        let { data: userPreference } = await supabase
          .from("contact_owner_preference")
          .select("should_be_contacted")
          .eq("user_id", userDetails?.user?.id as string)
          .limit(1)
          .maybeSingle();

        // try to get first_name and last_name from full_name
        const firstName =
          profiles?.firstname || profiles?.full_name?.split(" ")[0] || "";
        const lastName =
          profiles?.lastname ||
          profiles?.full_name?.split(" ").slice(1).join(" ") ||
          "";

        const profileData = {
          ...(profiles && profiles),
          email: userDetails?.user?.email,
          should_be_contacted: userPreference?.should_be_contacted || false,
          firstname: firstName,
          lastname: lastName,
          full_name: firstName + " " + lastName,
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
