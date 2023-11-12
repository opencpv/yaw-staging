import { useEffect, useState } from "react";
import userSession from "../utils/userSession";

export const useCurrentUserId = () => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const data = await userSession();
        const id = String(data?.session.user.id);
        setId(id);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchUserId();
  }, []);

  return id;
};
