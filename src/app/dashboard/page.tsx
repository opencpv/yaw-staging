"use client";
import supabase from "@/lib/utils/supabaseClient";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { AppContext } from "./layout";

const Dashboard = () => {
  const { user, setUser } = useContext(AppContext);
  const getProperties = async () => {
    let res: any = await supabase.from("messages").select("*");
    // try {
    //   const {
    //     data: property,
    //     error,
    //     status: dataStatus,
    //   } = await supabase.from("property").select("*");

      if (res) {
        console.log(res)
        setUser((prevUser) => ({
          ...prevUser,
          properties: { ...res.data[0] },
        }));
      }
    // } catch (error) {
    //   console.log(error);
    //   return error;
    // }
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
