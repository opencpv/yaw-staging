"use client";
import supabase from "@/lib/utils/supabaseClient";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { AppContext } from "./layout";
import { AppContextType } from "./types";

const Dashboard = () => {
  const { user, setUser } = useContext(AppContext) as AppContextType
  const getProperties = async () => {
    let {data: property, error}  = await supabase.from('property').select('*')

      if (property) {
        setUser((prevUser) => ({
          ...prevUser,
          properties: { property },
        }));
      }
  };

  useEffect(() => {
    getProperties();
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
