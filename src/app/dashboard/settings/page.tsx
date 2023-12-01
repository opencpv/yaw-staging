"use client";
import Head from "next/head";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import ProfileMainView from "./components/ProfileMainView";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Settings = () => {
  const [supabase, setsupabase] = useState<any>();
  
  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    } else {
      setsupabase(supabase);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard - RentRightGh</title>
      </Head>
      {supabase && <ProfileMainView />}
    </>
  );
};

export default Settings;
