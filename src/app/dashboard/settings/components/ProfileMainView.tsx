"use client";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useContext, useEffect, useState } from "react";
import ProfileInfo from "./ProfileIInfo";
import { AppContext } from "../../layout";
import { AppContextType } from "../../types";

const ProfileMainView = () => {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState<boolean>(false);
  
  const {user, setUser} = useContext(AppContext) as AppContextType

  useEffect(()=> {
    !user?.profileData && setLoading(true)
    user?.profileData && setLoading(false)
  }, [user?.profileData])


  return (
    <main className="pb-[60px]">
      <p className="text-[31px] font-semibold mt-2">Settings</p>
      <ProfileInfo
        profileData={user?.profileData}
        supabase={supabase}
        loading={loading}
      />
    </main>
  );
};

export default ProfileMainView;
