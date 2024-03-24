import { supabase } from "@/supabase/client";
import { useEffect, useState } from "react";

export const useGetUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user as unknown as User);
    };
    getUser();
  }, []);

  return user;
};
