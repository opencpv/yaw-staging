"use client";
import Profile from "./Profile";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const ProfileMainView = () => {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState<boolean>(false);
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
    id: null,
  });

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const session = JSON.parse(localStorage.getItem("session") as string);
      let { data } = await supabase.auth.getUser(session.access_token);
      let res: any = await supabase.from("profiles").select("*");
      console.log(res);
      const userData: any = data.user;
      const { email } = await userData;
      const profileData = { ...res.data[0] };
      const newData = { ...profileData, email };
      setProfileData({ ...newData });
    };

    getUserData().then(() => {
      setLoading(false);
    });
  }, [supabase]);

  return (
    <main className="pb-[60px]">
      <p className="text-[31px] font-semibold mt-2">Settings</p>
      <Profile
        profileData={profileData}
        supabase={supabase}
        loading={loading}
      />
    </main>
  );
};

export default ProfileMainView;
