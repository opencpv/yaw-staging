import { Metadata } from "next";
import ProfileMainView from "../../components/shared/settings/ProfileMainView";

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
