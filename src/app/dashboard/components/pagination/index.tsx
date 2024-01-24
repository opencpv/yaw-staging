"use client";

import CaSubscriptions from "@/app/components/icons/CaSubscriptions";
import { styled } from "@stitches/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import Link from "next/link";
import useViewport from "@/lib/custom-hooks/useViewport";
import { useEffect, useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { PgRoutesRenter } from "./links";

type PaginationTabProps = {
  active: string;
  icon: React.ReactNode;
  name: string;
  link: string;
};

const PaginationTab = ({ active, icon, name, link }: PaginationTabProps) => {
  return (
    <Link href={link}>
      <PgItem
        type={active == name ? "active" : undefined}
        className={`flex  flex-row lg:flex-col min-w-[130px] min-h-[40px] max-h-[52px] lg:max-w-none lg:min-h-[101px] py-[0.875rem] px-[1rem] text-[#B0B0B0] items-center justify-center text-2xl font-semibold gap-[0.775rem] rounded-[.75rem] ${name}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          {icon}
        </div>{" "}
        <p className="capitalize whitespace-nowrap text-[18px] 2xl:text-[25px]">
          {name}
        </p>
      </PgItem>
    </Link>
  );
};

const Pagination = () => {
  const vw = useViewport();
  const [active, setActive] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const [atEnd, setAtEnd] = useState(false);
  const scrollableRef = useRef<any>();

  useEffect(() => {
    if (pathname) {
      const currentURL = pathname;
      PgRoutesRenter.forEach((r) => {
        if (currentURL.includes(r?.name)) {
          setActive(r?.name);
        }
      });
    }
  }, [pathname]);

  useEffect(() => {
    const element = scrollableRef.current;
    const targetElement = element.querySelector(`.${active || "overview"}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [active]);

  const handleScrollToRight = () => {
    const element: any = scrollableRef.current;
    const scrollableWidth = element.scrollWidth;
    console.log(element.scrollLeft + element.clientWidth, scrollableWidth);
    if (element.scrollLeft + element.clientWidth >= scrollableWidth) {
      setAtEnd(true);
    } else {
      element.scrollLeft += element.clientWidth;
    }
  };

  const handleScrollToLeft = () => {
    const element: any = scrollableRef.current;
    const scrollableWidth = element.scrollWidth;
    if (element.scrollLeft <= 0) {
      setAtEnd(false);
      console.log("here");
    } else {
      element.scrollLeft += -element.clientWidth;
      console.log("er");
    }
    console.log(element.scrollLeft);
  };

  return (
    <Root className="flex items-start md:items-center gap-7 px-5 py-1">
      {atEnd && (
        <button
          onClick={handleScrollToLeft}
          className="w-full md:max-w-[83px]
                  max-w-[52px] aspect-square bg-[#396261] rounded-full flex
                  items-center justify-center hover:scale-[1.02]"
        >
          <MdKeyboardArrowLeft color="white" size={24} />
        </button>
      )}
      <div
        className="flex gap-8  items-center overflow-x-scroll pg-row justify-start w-full"
        ref={scrollableRef}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {PgRoutesRenter.map((r, index) => (
          <PaginationTab
            key={index}
            name={r?.name}
            active={active}
            icon={r?.icon}
            link={r?.link}
          />
        ))}
      </div>

      {!atEnd && (
        <button
          onClick={handleScrollToRight}
          className="w-full md:max-w-[83px]
                  max-w-[52px] aspect-square bg-[#396261] rounded-full flex
                  items-center justify-center hover:scale-[1.02]"
        >
          <MdKeyboardArrowRight color="white" size={24} />
        </button>
      )}
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
        backgroundColor: "#396261",
        color: "white",
      },
    },
  },
});
export default Pagination;
