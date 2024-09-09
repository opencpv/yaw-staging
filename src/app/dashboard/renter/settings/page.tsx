import { Metadata } from "next";
import dynamic from "next/dynamic";
const ProfileMainView = dynamic(
  () => import("../../components/shared/settings/ProfileMainView"),
);

export const metadata: Metadata = {
  title: "Settings",
  description: "", // tentative
};

const Settings = () => {
  return (
    <>
      <ProfileMainView />
    </>
  );
};

export default Settings;
