"use client";
import Head from "next/head";
import Profile from "./components/profile";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SanityClient } from "@sanity/client";
import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "@/lib/utils/supabaseClient";

const Settings = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState<any>({
    username: "",
    fullname: "",
    avatar_url: "",
    firstname: "",
    lastname: "",
    country: "",
    phone: "",
    bio: "",
    twitter_url: "",
    facebook_url: "",
    linkedin_url: "",
    whatsapp: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      let { data } = await supabase.auth.getUser();
      let res: any = await supabase.from("profiles").select("*");
      const userData: any = await data.user;
      const { email } = await userData;
      const profileData = { ...res.data[0] };
      const newData = { ...profileData, email };
      setProfileData({ ...newData });
    };
    getUserData();
  }, []);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data, error }: { data: any; error: any }) => {
        if (!data.session) {
          router.push("/login");
        }
      });
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard - RentRightGh</title>
      </Head>
      <main className="pb-[60px]">
        <p className="text-[31px] font-semibold mt-2">Settings</p>
        <Profile profileData={profileData} />
      </main>
    </>
  );
};

export default Settings;
