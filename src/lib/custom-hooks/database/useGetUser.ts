import { createClient } from "@/lib/utils/supabase/auth/client";
import { useEffect, useState } from "react";

export const useGetUser = (): User | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    const getUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data && data.user) {
          setUser(data.user as unknown as User);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  return user;
};
