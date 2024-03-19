"use client";
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
  const [firstTimeRole] = useLocalStorage<Role | undefined>("first-time-role");

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

    // if (!firstTimeRole) {
    //   if (currentRole === "renter") {
    //     router.replace("/dashboard/renter/overview");
    //   } else if (currentRole === "lister") {
    //     router.replace("/dashboard/lister/overview");
    //   }
    // } else {
    //   router.replace("/dashboard/renter/overview");
    // }
  }, [router, currentRole, setUser, firstTimeRole]);

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
