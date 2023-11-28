"use client";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useContext, useEffect, useState } from "react";
import ProfileInfo from "./ProfileIInfo";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useManageAccountStore } from "@/store/dashboard/propertiesStore";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Blocking from "./Blocking";

const ProfileMainView = () => {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useAppStore();
  const optionSelect = useManageAccountStore((state) => state.filterOption);
  const handleOptionChange = useManageAccountStore(
    (state) => state.changeOption
  );

  useEffect(() => {
    !user?.profileData && setLoading(true);
    user?.profileData && setLoading(false);
  }, [user?.profileData]);

  return (
    <main className="pb-[60px]">
      <p className="text-[1.9375rem] font-semibold">Settings</p>
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        // radius="full"
        classNames={{
          base: "  p-[0.75rem] ",
          tabList: " gap-4 w-full",
          tab: "bg-white px-4 py-3  w-full  ",
          tabContent:
            "text-shade-200 group-data-[selected=true]:text-[#307A4A] group-data-[selected=true]:font-semibold  ",
          cursor: "shadow-none border-b-[#45808B] border-b-2 rounded-none w-full",
          panel: "pt-2",
        }}
        selectedKey={optionSelect}
        onSelectionChange={(selectedOption) =>
          handleOptionChange(selectedOption)
        }>
        <Tab key="profile" title="Profile">
          <div type={"active"}>
            <p className="text-[1.5625rem] font-semibold">Profile</p>
            <ProfileInfo
              profileData={user?.profileData}
              supabase={supabase}
              loading={loading}
            />
          </div>
        </Tab>
        <Tab key="blocking" title="Blocking">
          <div type={"active"}>
            <Blocking/>
          </div>
        </Tab>{" "}
        <Tab key="account-setting" title="Account Setting">
          <div type={"active"}>Account Setting</div>
        </Tab>
      </Tabs>
    </main>
  );
};

export default ProfileMainView;
