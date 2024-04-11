"use client";
import Loader from "@/components/__shared/loader/Loader";
import { useGetUser } from "@/lib/custom-hooks/database/useGetUser";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { currentRole } = useDashboardStore();
  const router = useRouter();

  useUserData();

  const user = useGetUser();

  useEffect(() => {
    const handleRedirect = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        router.replace(`/dashboard/${currentRole}/overview`);
      } else {
        router.replace(`/login`);
      }
    };

    handleRedirect();
  }, [router, currentRole, user]);

  return (
    <>
      <main className="grid h-40 place-items-center">
        <Loader />
      </main>
    </>
  );
};

export default Dashboard;
