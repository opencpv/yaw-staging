"use client";
import Loader from "@/components/__shared/ui/loader";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { currentRole } = useDashboardStore();
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = async () => {
      const supabase = createClient();
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (user) {
        router.replace(`/dashboard/${currentRole.toLowerCase()}/overview`);
      }
    };

    handleRedirect();
  }, [router, currentRole]);

  return (
    <main className="grid h-40 place-items-center">
      <Loader />
    </main>
  );
};

export default Dashboard;
