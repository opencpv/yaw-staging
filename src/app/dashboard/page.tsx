"use client";
import Loader from "@/components/__shared/loader/Loader";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useAppStore();
  const { currentRole } = useDashboardStore();
  const router = useRouter();

  useUserData();

  useEffect(() => {
    if (user) {
      router.replace(`/dashboard/${currentRole}/overview`);
    }
  }, [router, currentRole, user]);

  return (
    <>
      <main className="grid h-lvh place-items-center">
        <Loader />
      </main>
    </>
  );
};

export default Dashboard;
