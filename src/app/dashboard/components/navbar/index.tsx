"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Switch from "./switch";
import Search from "./search";
import NotificationsPopover from "../../notifications/components/NotificationsPopover";
import { montserat } from "@/styles/font";
import { useAppStore } from "@/store/dashboard/AppStore";
import Link from "next/link";
import { useLocalStorage } from "@uidotdev/usehooks";
import Logo from "@/components/__shared/Logo";
import Loader from "@/components/__shared/loader/Loader";

const Navbar = () => {
  const { icons } = useAssets();

  const user = useAppStore((state) => state.user);

  const [dashboardType, setDashboardType] =
    useLocalStorage<any>("dashboard-type");

  return (
    <Root
      className={`flex flex-nowrap items-center
      gap-5 bg-[#073B3A] p-[1rem] 2xl:p-[1.875rem] `}
    >
      <div className="flex w-full items-center justify-start gap-6 md:gap-10 lg:gap-20">
        <Logo size="xs" />

        <Search />
      </div>
      <div className="relative flex w-fit items-center gap-2 lg:gap-10">
        <Switch />
        <div>
          <p className="whitespace-nowrap text-[14px] text-[#fff] md:text-[16px]">
            {user?.full_name}
          </p>
        </div>

        <NotificationsPopover />

        <div className="relative flex min-h-[50px] w-full min-w-[40px] items-center justify-center overflow-hidden rounded-full md:min-w-[50px]">
          {user?.avatar_url == undefined ? <Loader /> : <Image
            src={user?.avatar_url}
            alt="User picture"
            width={50}
            height={50}
          />}
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
