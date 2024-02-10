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
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import PaginationMenu from "./PaginationMenu";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";

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
        className={`flex h-fit min-w-[160px] cursor-pointer items-center justify-center gap-3 rounded-xl px-4 py-3 lg:py-4 text-2xl font-semibold text-[#B0B0B0] transition-all lg:max-w-none ${name}`}
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
  const vw = useViewport();
  const [active, setActive] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const [atEnd, setAtEnd] = useState(false);
  const scrollableRef = useRef<any>();
  // const scrollableRef = useRef<HTMLDivElement>(null);

  const { setIsOpen } = useDashboardMenuStore();

  useEffect(() => {
    if (pathname) {
      const currentURL = pathname;
      PgRoutesRenter.forEach((r) => {
        if (currentURL.includes(r?.link)) {
          setActive(r?.name);
        }
      });
    }
  }, [pathname]);

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
      className="flex items-start gap-7 px-5 py-1 pb-4 md:items-center"
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
      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        spaceBetween={32}
        freeMode={true}
        scrollbar={false}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper invisible hidden h-fit w-full md:visible"
        wrapperClass="justify-between"
      >
        {PgRoutesRenter.map(
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
      </Swiper>

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
      <Button
        className="hidden h-full w-16 items-center justify-center rounded-xl bg-primary-200 px-4 py-3 text-white md:flex lg:h-24 lg:min-w-unit-16 lg:px-2"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center justify-center">
          <HiBars3BottomRight size={25} />
        </div>
      </Button>
      <button
        className="relative bottom-1 ml-auto mt-2 h-max w-fit items-center justify-center rounded-xl border border-primary-800 px-3 py-2 text-primary-800 md:hidden"
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
        backgroundColor: "#396261",
        color: "white",
      },
    },
  },
});
export default Pagination;
