import Head from "next/head";
import ProfileMainView from "../../components/shared/settings/ProfileMainView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: ""
};

const Settings = () => {
  return (
    <>
      <ProfileMainView />
    </>
  );
};

export default Settings;
