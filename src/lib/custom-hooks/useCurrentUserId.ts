import { useEffect, useState } from "react";
import userSession from "../utils/userSession";

export const useCurrentUserId = () => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const data = await userSession();
        const userId = String(data?.session.user.id);
        setId(userId);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchUserId();
  }, []);

  return id;
};
