"use client";

import { styled } from "@stitches/react";
import Link from "next/link";
import useViewport from "@/lib/custom-hooks/useViewport";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PgRoutesRenter } from "./links";
import { HiBars3BottomRight } from "react-icons/hi2";
import Button from "@/components/__shared/ui/button/Button";
import { LowerCase } from "@/lib/utils/stringManipulation";

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
        type={LowerCase(active) === LowerCase(name) ? "active" : undefined}
        className={`flex max-h-[52px] min-h-[40px] min-w-[160px] flex-row items-center justify-center gap-[0.775rem] rounded-[.75rem] px-[1rem] py-[0.875rem] text-2xl font-semibold text-[#B0B0B0] transition-all lg:min-h-[85px] lg:max-w-none lg:flex-col ${name}`}
      >
        <div className="flex h-full w-full items-center justify-center">
          {icon}
        </div>{" "}
        <p className="whitespace-nowrap text-lg capitalize 2xl:text-2xl">
          {name}
        </p>
      </PgItem>
    </Link>
  );
};

const Pagination = () => {
  const vw = useViewport();
  const [active, setActive] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [atEnd, setAtEnd] = useState(false);
  const scrollableRef = useRef<any>();
  // const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname) {
      const currentURL = pathname;
      PgRoutesRenter.forEach((r) => {
        if (currentURL.includes(r?.link)) {
          setActive(r?.name);
        }
      });
    }

    //
    let startX: number;
    let scrollLeft: number;
    console.log(isDragging);

    if (scrollableRef.current) {
      scrollableRef?.current.addEventListener("mousedown", (e: MouseEvent) => {
        setIsDragging(true);
        startX = e.pageX - scrollableRef.current!.offsetLeft;
        scrollLeft = scrollableRef.current!.scrollLeft;
      });

      scrollableRef?.current.addEventListener("mouseleave", () => {
        setIsDragging(false);
      });

      scrollableRef?.current.addEventListener("mouseup", () => {
        setIsDragging(false);
      });

      scrollableRef?.current.addEventListener("mousemove", (e: MouseEvent) => {
        if (!isDragging) return;
        const x = e.pageX - scrollableRef.current!.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the multiplier for sensitivity
        scrollableRef.current!.scrollLeft = scrollLeft - walk;
        console.log(walk);
      });

      // Optional: Prevent text selection during dragging
      // scrollableRef?.current.addEventListener("selectstart", (e: any) => {
      //   if (isDragging) e.preventDefault();
      // });
    }
  }, [pathname, isDragging]);

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
    <Root
      className="flex items-start gap-7 px-5 py-1 md:items-center"
      ref={scrollableRef}
    >
      {/* {atEnd && (
        <button
          onClick={handleScrollToLeft}
          className="flex aspect-square
                  w-full max-w-[52px] items-center justify-center rounded-full
                  bg-[#396261] hover:scale-[1.02] md:max-w-[83px]"
        >
          <MdKeyboardArrowLeft color="white" size={24} />
        </button>
      )} */}
      <div
        className="pg-row hidden w-full items-center justify-start gap-8 overflow-x-scroll md:flex"
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

      {/* {!atEnd && (
        <button
          onClick={handleScrollToRight}
          className="flex aspect-square
                  w-full max-w-[52px] items-center justify-center rounded-full
                  bg-[#396261] hover:scale-[1.02] md:max-w-[83px]"
        >
          <MdKeyboardArrowRight color="white" size={24} />
        </button>
      )} */}
      <Button className="relative bottom-2.5 hidden h-full w-28 items-center justify-center rounded-xl bg-[#45808B] px-4 py-3 text-white md:flex">
        <div className="flex flex-col items-center gap-3">
          <HiBars3BottomRight size={25} />
          <p className="text-lg font-medium 2xl:text-2xl">More</p>
        </div>
      </Button>
      <button className="relative bottom-1 ml-auto mt-2 h-max w-fit items-center justify-center rounded-xl border border-primary-800 px-3 py-2 text-primary-800 md:hidden">
        <div className="flex flex-col items-center gap-3">
          <HiBars3BottomRight size={25} />
        </div>
      </button>
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
