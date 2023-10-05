"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Switch from "./switch";
import Search from "./search";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import MessagesPopover from "../../notifications/components/NotificationsPopover";
import NotificationsPopover from "../../notifications/components/NotificationsPopover";

const Navbar = () => {
  const { icons } = useAssets();
  
  return (
    <Root className="flex items-center flex-wrap">
      <div className="flex gap-6 md:gap-10 lg:gap-20">
        <Image
          src={icons.Logo}
          alt="Logo"
          className="max-w-[52px] md:max-w-[60px] max-h-[50px] aspect-[60/50]"
        />

        <Search />
      </div>
      <div className="flex gap-2 lg:gap-10 w-fit relative items-center">
        <Switch />
        <div>
          <p className="text-[#fff] whitespace-nowrap">John Doe</p>
        </div>
        <button className="relative min-w-[52px] min-h-[52px] w-full aspect-square flex justify-center items-center">
          <div className="absolute bg-[#B71851] text-[#fff]
          rounded-full w-[26px] h-[26px] flex items-center justify-center
          text-[14px] right-[0px] top-0">
            3
          </div>
          <NotificationsPopover/>
        </button>
      <div className="relative w-full min-w-[50px] min-h-[50px]">
        <Image
          src="/assets/images/dashboard-navbar.png"
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
  backgroundColor: "#073B3A",
  maxHeight: "52px",
  //   maxWidth: "1728px",
  width: "100%",
  aspectRatio: "1728/52",
  justifyContent: "space-between",
  padding: "1.875rem",

  "@media screen and (max-width:768px)":{
    padding:"1rem",
  }
});

export default Navbar;
