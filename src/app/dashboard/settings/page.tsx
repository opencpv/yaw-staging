import Head from "next/head";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ProfileMainView from "./components/ProfileMainView";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Settings = async () => {
  const supabase = createServerComponentClient({ cookies });

  if (!supabase) {
    redirect("/");
  }
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
