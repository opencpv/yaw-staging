import userSession from "@/lib/utils/userSession";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export const useUserSession = () => {
  const [session, setSession] = useState<{ session: Session } | null>(null);
  useEffect(() => {
    const getUserSession = async () => {
      const data = await userSession();
      setSession(data);
    };

    getUserSession();

  }, [session]);
  
  return session;
};
