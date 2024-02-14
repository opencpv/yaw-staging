"use client";
import supabase from "@/lib/utils/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const { user, setUser } = useAppStore();
  const router = useRouter();
  const getProperties = async () => {
    let { data: property, error } = await supabase.from("property").select("*");

    if (property) {
      setUser({
        properties: { property },
      });
    }
  };

  useEffect(() => {
    getProperties();

    router.replace("/dashboard/renter/overview"); // TODO: get previous role and redirect to it
  }, []);

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
