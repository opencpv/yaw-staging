"use client";

import { styled } from "@stitches/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PgRoutesLister, PgRoutesRenter } from "./links";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Button } from "@/components/__shared/ui/button";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import Switch from "../navbar/switch";
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/__shared/ui/scroll-area";
const PaginationMenu = dynamic(() => import("./PaginationMenu"));

type PaginationTabProps = {
  icon: React.ReactNode;
  name: string;
  link: string;
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
      if (currentRole === "LISTER") {
        PgRoutesLister.forEach((r) => {
          if (currentURL.includes(r?.link)) {
            setActive(r?.name);
          }
        });
      } else if (currentRole === "RENTER") {
        PgRoutesRenter.forEach((r) => {
          if (currentURL.includes(r?.link)) {
            setActive(r?.name);
          }
        });
      }
    }
  }, [pathname, currentRole]);

  return (
    <Root className="flex w-full items-start gap-7 px-5 py-1 pb-4 md:items-center">
      <div className="w-full overflow-x-auto max-md:hidden">
        <ScrollArea className="h-fit flex w-full justify-between gap-5 max-md:invisible">
          {currentRole === "RENTER" &&
            PgRoutesRenter.map(
              (r, index) =>
                index < 7 && (
                  <div key={index} className="min-w-fit max-w-fit">
                    <PaginationTab
                      name={r?.name}
                      icon={r?.icon}
                      link={r?.link}
                    />
                  </div>
                ),
            )}
          {currentRole === "LISTER" &&
            PgRoutesLister.map(
              (r, index) =>
                index < 7 && (
                  <div key={index} className="min-w-fit max-w-fit">
                    <PaginationTab
                      name={r?.name}
                      icon={r?.icon}
                      link={r?.link}
                    />
                  </div>
                ),
            )}
        </ScrollArea>
      </div>

      {/* Desktop */}
      <Button
        size={"icon"}
        className="shrink-0 px-2.5 py-3 max-md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center justify-center">
          <HiBars3BottomRight size={25} />
        </div>
      </Button>

      <Switch className="relative my-auto mr-auto flex w-full items-center gap-5 ssm:hidden" />

      {/* Mobile */}
      <Button
        size={"icon"}
        variant={"outline"}
        radius={"lg"}
        className="my-auto ml-auto h-max w-fit px-3 py-2 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col items-center gap-3">
          <HiBars3BottomRight size={25} />
        </div>
      </Button>
      <PaginationMenu />
    </Root>
  );
};

const Root = styled("nav", {
  boxShadow:
    "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",

  ".pg-row::-webkit-scrollbar": {
    width: 0,
  },
});

const PgItem = styled("div", {
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

const PaginationTab = ({ icon, name, link }: PaginationTabProps) => {
  const pathname = usePathname();
  return (
    <Link href={link} draggable={false} className="rounded-xl">
      <PgItem
        type={pathname?.includes(link) ? "active" : undefined}
        className={`flex h-fit min-w-[160px] cursor-pointer items-center justify-center gap-3 rounded-xl px-4 py-3 text-2xl font-semibold text-[#B0B0B0] transition-all lg:max-w-none lg:py-4`}
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
export default Pagination;
