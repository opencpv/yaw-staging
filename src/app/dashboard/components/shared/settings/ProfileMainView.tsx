"use client";
import ProfileInfo from "./ProfileIInfo";
import { useManageAccountStore } from "@/store/dashboard/propertiesStore";
import { Tabs, Tab } from "@nextui-org/react";
import Blocking from "./Blocking";

const ProfileMainView = () => {
  const optionSelect = useManageAccountStore(
    (state: any) => state.filterOption,
  );
  const handleOptionChange = useManageAccountStore(
    (state: any) => state.changeOption,
  );

  return (
    <main>
      <h2 className="mb-5">Settings</h2>
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        // radius="full"
        classNames={{
          tabList: "gap-10 max-xxs:flex-wrap w-full",
          tab: "bg-transparent w-full bg-transparent px-0",
          tabContent:
            "text-shade-200 group-data-[selected=true]:text-primary-800",
          cursor:
            "shadow-none bg-transparent dark:bg-transparent border-b-primary-800 border-b-2 rounded-none w-full",
          panel: "pt-2",
        }}
        selectedKey={optionSelect}
        onSelectionChange={(selectedOption) =>
          handleOptionChange(selectedOption)
        }
      >
        <Tab key="profile" title="Profile">
          <ProfileInfo />
        </Tab>
        <Tab key="blocking" title="Blocking">
          <div>
            <Blocking />
          </div>
        </Tab>
        {/* !!! COMMENTED OUT FOR NOW */}
        {/* <Tab key="account-setting" title="Account Setting">
          <div>Account Setting</div>
        </Tab> */}
      </Tabs>
    </main>
  );
};

export default ProfileMainView;
