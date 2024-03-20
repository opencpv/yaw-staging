"use client";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";
import { LowerCase } from "@/lib/utils/stringManipulation";
import supabase from "@/lib/utils/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Role, useDashboardStore } from "@/store/dashboard/dashboardStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const { user, setUser } = useAppStore();
  const { currentRole } = useDashboardStore();
  const router = useRouter();

  useUserData();

  useEffect(() => {
    const getProperties = async () => {
      let { data: property, error } = await supabase
        .from("property")
        .select("*");

      if (property) {
        setUser({
          properties: { property },
        });
      }
    };
    getProperties();
  }, [setUser]);

  useEffect(() => {
    const firstTimeRole = localStorage.getItem("first-time-role");
    if (!firstTimeRole || firstTimeRole !== currentRole) {
      router.replace(`/dashboard/${currentRole}/overview`);
    }
  }, [router, currentRole]);

  return (
    <>
      <Head>
        <title>Settings - RentRightGh</title>
        <base href="/dashboard"></base>
      </Head>
      <main className={"h-[100vh] w-full bg-black"}></main>
    </>
  );
};

export default Dashboard;
