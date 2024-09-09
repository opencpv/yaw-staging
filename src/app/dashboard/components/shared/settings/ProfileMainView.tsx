"use client";
import { useManageAccountStore } from "@/store/dashboard/propertiesStore";
import { cn } from "@/lib/utils";
import Blocking from "./Blocking";
import dynamic from "next/dynamic";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/__shared/ui/tabs";
const ProfileInfo = dynamic(() => import("./ProfileInfo"));

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
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger
            size="sm"
            className="bg-transparent px-4 text-shade-300 shadow-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:underline data-[state=active]:underline-offset-8"
            value="profile"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            size="sm"
            className="bg-transparent px-4 text-shade-300 shadow-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:underline data-[state=active]:underline-offset-8"
            value="blocked"
          >
            Blocked
          </TabsTrigger>
          <TabsTrigger
            size="sm"
            className="bg-transparent px-4 text-shade-300 shadow-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:underline data-[state=active]:underline-offset-8"
            value="account"
          >
            Account
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <ProfileInfo />
        </TabsContent>
        <TabsContent value="blocked">
          <Blocking />
        </TabsContent>
        <TabsContent value="account">
          <div>Account</div>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ProfileMainView;
