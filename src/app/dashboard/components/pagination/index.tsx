"use client";

import { styled } from "@stitches/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PgRoutesLister, PgRoutesRenter } from "./links";
import { HiBars3BottomRight } from "react-icons/hi2";
import Button from "@/components/__shared/ui/button/Button";
import { LowerCase } from "@/lib/utils/stringManipulation";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import Switch from "../navbar/switch";
import dynamic from "next/dynamic";
const PaginationMenu = dynamic(() => import("./PaginationMenu"));

// import { ScrollShadow } from "@nextui-org/react";

type PaginationTabProps = {
  active: string;
  icon: React.ReactNode;
  name: string;
  link: string;
};

const PaginationTab = ({ active, icon, name, link }: PaginationTabProps) => {
  return (
    <Link href={link} draggable={false}>
      <PgItem
        type={LowerCase(active) === LowerCase(name) ? "active" : undefined}
        className={`flex h-fit min-w-[160px] cursor-pointer items-center justify-center gap-3 rounded-xl px-4 py-3 text-2xl font-semibold text-[#B0B0B0] transition-all lg:max-w-none lg:py-4 ${name}`}
        draggable={false}
      >
        <div className="flex flex-row gap-3 lg:flex-col">
          <div className="flex h-full w-full items-center justify-center">
            {icon}
          </div>
          <p
            className="unselectable cursor-pointer whitespace-nowrap text-lg capitalize"
            unselectable="on"
            onSelectCapture={() => false}
            onMouseDown={() => false}
          >
            {name}
          </p>
        </div>
      </PgItem>
    </Link>
  );
};

const Pagination = () => {
  const [active, setActive] = useState("");
  const pathname = usePathname();

  const { setIsOpen } = useDashboardMenuStore();
  const { currentRole } = useDashboardStore();

  useEffect(() => {
    // sets the active tab
    if (pathname) {
      const currentURL = pathname;
      if (currentRole === "lister") {
        PgRoutesLister.forEach((r) => {
          if (currentURL.includes(r?.link)) {
            setActive(r?.name);
          }
        });
      } else if (currentRole === "renter") {
        PgRoutesRenter.forEach((r) => {
          if (currentURL.includes(r?.link)) {
            setActive(r?.name);
          }
        });
      }
    }
  }, [pathname, currentRole]);

  return (
    <Root className="flex items-start gap-7 px-5 py-1 pb-4 md:items-center">
      {/* <ScrollShadow
        orientation="horizontal"
        isEnabled={true}
        hideScrollBar
        className="invisible order-2 hidden h-fit w-full justify-between gap-5 ssm:order-1 md:visible md:flex"
      >
        {currentRole === "renter" &&
          PgRoutesRenter.map(
            (r, index) =>
              index < 7 && (
                <SwiperSlide key={index} className="min-w-fit max-w-fit">
                  <PaginationTab
                    name={r?.name}
                    active={active}
                    icon={r?.icon}
                    link={r?.link}
                  />
                </SwiperSlide>
              ),
          )}
        {currentRole === "lister" &&
          PgRoutesLister.map(
            (r, index) =>
              index < 7 && (
                <SwiperSlide key={index} className="min-w-fit max-w-fit">
                  <PaginationTab
                    name={r?.name}
                    active={active}
                    icon={r?.icon}
                    link={r?.link}
                  />
                </SwiperSlide>
              ),
          )}
      </ScrollShadow> */}

      {/* Desktop */}
      <button
        className="hidden h-14 w-full max-w-12 shrink-0 items-center justify-center rounded-lg bg-primary p-0 text-white ssm:order-2 md:flex"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center justify-center">
          <HiBars3BottomRight size={25} />
        </div>
      </button>

      <Switch className="relative order-1 my-auto mr-auto flex w-full flex-1 items-center gap-5 ssm:order-3 ssm:hidden" />

      {/* Mobile */}
      <button
        className="order-4 my-auto ml-auto h-max w-fit items-center justify-center rounded-xl border border-primary-800 px-3 py-2 text-primary-800 ssm:order-4 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col items-center gap-3">
          <HiBars3BottomRight size={25} />
        </div>
      </button>
      <PaginationMenu />
    </Root>
  );
};

const Root = styled("div", {
  boxShadow:
    "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",

  ".pg-row::-webkit-scrollbar": {
    width: 0,
  },
});

const PgItem = styled("button", {
  "&:hover": {
    backgroundColor: "#39626125",
    color: "black",
    scale: "1.05",
  },

  variants: {
    type: {
      active: {
        backgroundColor: "#11605E",
        color: "white",
      },
    },
  },
});
export default Pagination;
