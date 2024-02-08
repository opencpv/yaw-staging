"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Switch from "./switch";
import Search from "./search";
import NotificationsPopover from "../../notifications/components/NotificationsPopover";
import { montserat } from "@/styles/font";
import { useAppStore } from "@/store/dashboard/AppStore";
import style from "../../Dashboard.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import Logo from "@/components/__shared/Logo";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { useRef, useState } from "react";
import Loader from "@/components/__shared/loader/Loader";

const Navbar = () => {
  const { icons } = useAssets();

  const user = useAppStore((state) => state.user);

  const [dashboardType, setDashboardType] =
    useLocalStorage<any>("dashboard-type");

  const [expandMobileSearch, setExpandMobileSearch] = useState(false);

  return (
    <>
      <Root
        className={`flex flex-nowrap items-center
        gap-16 bg-primary-500 p-[1rem] 2xl:p-[1.875rem]`}
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
          <div>
            <p className="hidden whitespace-nowrap text-sm text-[#fff] xs:block">
              {/* {user?.profileData?.full_name} */}
              John Doe {/* temporary */}
            </p>
          </div>
          <div className="relative flex min-h-[50px] w-full min-w-[40px] items-center justify-center overflow-hidden rounded-full md:min-w-[50px]">
            <Image
              src={user?.profileData?.avatar_url}
              alt="User picture"
              width={50}
              height={50}
            />
          </div>
        </div>
      </Root>
      {/* search bar for mobile */}
      <div
        className={`absolute left-0 top-[10%] z-[9999] flex w-full items-center justify-between gap-5 bg-primary-500 text-white transition-all md:hidden ${
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
