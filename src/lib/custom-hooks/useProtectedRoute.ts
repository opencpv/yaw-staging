import userSession from "@/lib/utils/userSession";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const useProtectedRoute = () => {
  const router = useRouter();
  useEffect(() => {
    const getSession = async () => {
      const data = await userSession();
      if (!data?.session) {
        router.push("/login");
      }
    };

    getSession();
  });
};

export { useProtectedRoute };
