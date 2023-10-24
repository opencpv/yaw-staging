"use client";
import Head from "next/head";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

const Dashboard = () => {
  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Settings - RentRightGh</title>
      </Head>
      <main></main>
    </>
  );
};

export default Dashboard;
