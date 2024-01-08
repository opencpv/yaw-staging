"use client";
import supabase from "@/lib/utils/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import Head from "next/head";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const { user, setUser } = useAppStore();
<<<<<<< HEAD
  console.log(user);
  const getProperties = async () => {
    let { data: property, error } = await supabase.from("property").select("*");
    console.log(property);
=======
  const getProperties = async () => {
    let { data: property, error } = await supabase.from("property").select("*");

>>>>>>> d07996d5543a404b7b8eb31d2a242d21d57f3b02
    if (property) {
      setUser({
        properties: { property },
      });
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      <Head>
        <title>Settings - RentRightGh</title>
        <base href="/dashboard"></base>
      </Head>
      <main className={"w-full h-[100vh] bg-black"}></main>
    </>
  );
};

export default Dashboard;
