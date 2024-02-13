"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Switch from "./switch";
import Search from "./search";
import NotificationsPopover from "../shared/notifications/NotificationsPopover";
import { useAppStore } from "@/store/dashboard/AppStore";
import style from "../../Dashboard.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import Logo from "@/components/__shared/Logo";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { useRef, useState } from "react";
import Loader from "@/components/__shared/loader/Loader";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";

const Navbar = () => {
  const { icons } = useAssets();

  const user = useAppStore((state) => state.user);

  const [dashboardType, setDashboardType] =
    useLocalStorage<any>("dashboard-type");

  const [expandMobileSearch, setExpandMobileSearch] = useState(false);
  const { isOpen } = useDashboardMenuStore();

  return (
    <>
      <Root
        className={`relative ${
          isOpen ? "z-[50]" : "z-[70]"
        } flex flex-nowrap items-center gap-16
        bg-primary-500 p-[1rem] md:z-[initial] 2xl:p-[1.875rem]`}
      >
        <div className="flex w-full items-center justify-start gap-6 md:gap-10 lg:gap-20">
          <Logo size="xs" />
          {/* search icon for mobile */}
          <AiOutlineSearch
            size={22}
            color="white"
            className="shrink-0 md:hidden"
            role="search"
            aria-label="search"
            onClick={() => setExpandMobileSearch(!expandMobileSearch)}
          />
          <Search className="hidden md:flex" />
        </div>
        <div className="relative flex w-fit items-center gap-7">
          <Switch />
          <NotificationsPopover />
          {/* <div>
            <p className="hidden whitespace-nowrap text-sm text-[#fff] xs:block">
              {user?.full_name}
            </p>
          </div> */}
          <div className="relative flex min-h-[50px] w-full min-w-[40px] items-center justify-center overflow-hidden rounded-full md:min-w-[50px]">
            {user?.avatar_url == undefined ? (
              <Loader />
            ) : (
              <Image
                src={user?.avatar_url}
                alt={user?.full_name}
                width={50}
                height={50}
              />
            )}
          </div>
        </div>
      </Root>
      {/* search bar for mobile */}
      <div
        className={`absolute left-0 top-0 z-[60] flex w-full items-center justify-between gap-5 bg-primary-500 p-4 pt-2 text-white transition-all duration-1000 md:hidden ${
          expandMobileSearch
            ? style.visibleMobileSearch
            : style.hiddenMobileSearch
        }`}
      >
        <Search />
        <IoIosCloseCircle
          size={30}
          onClick={() => setExpandMobileSearch(false)}
        />
      </div>
    </>
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
