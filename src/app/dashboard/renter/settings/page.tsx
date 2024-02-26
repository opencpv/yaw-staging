"use client";
import Head from "next/head";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import ProfileMainView from "../../components/shared/settings/ProfileMainView";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Settings</title>
      </Head>
      <ProfileMainView />
    </>
  );
};

export default Settings;
