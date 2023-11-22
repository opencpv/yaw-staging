"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Switch from "./switch";
import Search from "./search";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import MessagesPopover from "../../notifications/components/NotificationsPopover";
import NotificationsPopover from "../../notifications/components/NotificationsPopover";
import { montserat } from "@/app/styles/font";
import { useContext } from "react";
import { useAppStore } from "@/store/dashboard/AppStore";

const Navbar = () => {
  const { icons } = useAssets();


  const {user} = useAppStore()


  return (
    <Root
      className={`flex items-center flex-nowrap ${montserat.className}
      p-[1rem] 2xl:p-[1.875rem] bg-[#073B3A] `}>
      <div className="flex gap-6 md:gap-10 lg:gap-20 items-center w-full justify-start">
        <Image
          src={icons.Logo}
          alt="Logo"
          className="max-w-[42px] md:max-w-[60px] max-h-[50px] aspect-[60/50]"
        />

        <Search />
      </div>
      <div className="flex gap-2 lg:gap-10 w-fit relative items-center">
        <Switch />
        <div>
          <p className="text-[#fff] text-[14px] md:text-[16px] whitespace-nowrap">{user?.profileData?.full_name}</p>
        </div>

        <NotificationsPopover />

        <div className="relative w-full flex items-center justify-center min-w-[40px] md:min-w-[50px] min-h-[50px] rounded-full overflow-hidden">
          <Image
            src={user?.profileData?.avatar_url}
            alt="User picture"
            width={50}
            height={50}
          />
        </div>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  maxHeight: "52px",
  //   maxWidth: "1728px",
  width: "100%",
  aspectRatio: "1728/52",
  justifyContent: "space-between",

  "@media screen and (max-width:768px)": {
    padding: "1rem",
  },
});

export default Navbar;
