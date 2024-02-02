"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "../../Dashboard.module.css";
import Logo from "@/components/__shared/Logo";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";
import PaginationMenuItem from "./PaginationMenuItem";
import { PgRoutesRenter } from "./links";
import MenuScrollDownButton from "@/components/NavMenu.tsx/components/MenuScrollDownButton";
import { pagination } from "@nextui-org/react";

const PaginationMenu = () => {
  const { isOpen, setIsOpen } = useDashboardMenuStore();
  const [hide, setHide] = useState(false);

  const paginationMenuRef = useRef<HTMLElement>(null);

  useHideDocumentScrollBar(isOpen);

  const handleScrollDown = () => {
    if (paginationMenuRef.current) {
      paginationMenuRef.current.scrollTo({
        top:
          paginationMenuRef.current.scrollHeight -
          paginationMenuRef.current.offsetHeight,
        behavior: "smooth",
      });
      setHide(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (paginationMenuRef.current)
        if (
          paginationMenuRef.current.scrollHeight -
            paginationMenuRef.current.offsetHeight <=
          80
        ) {
          setHide(true);
        }
    };

    const handleOnMount = () => {
      if (paginationMenuRef.current)
        if (
          paginationMenuRef.current.scrollTop >=
          paginationMenuRef.current.scrollHeight -
            paginationMenuRef.current.offsetHeight -
            80
        ) {
          setHide(true);
        }
    };

    const handleScroll = () => {
      if (paginationMenuRef.current)
        if (paginationMenuRef.current.scrollTop > 0) {
          setHide(true);
        }
    };

    handleOnMount();
    window.addEventListener("resize", handleResize);
    paginationMenuRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`${style.paginationMenu} ${
        isOpen
          ? `${style.paginationMenuVisible}`
          : `${style.paginationMenuHidden}`
      }`}
      ref={paginationMenuRef}
    >
      <div className="flex items-center justify-between gap-5">
        <Logo size="xs" />
        <AiFillCloseCircle
          color="white"
          size={40}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer transition-all duration-300 hover:rotate-90"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="grid w-full gap-x-5 gap-y-10 sm:w-[initial] sm:grid-cols-2 sm:gap-y-20 min-[980px]:grid-cols-3">
          {PgRoutesRenter.map((route) => (
            <PaginationMenuItem
              key={route.name}
              href={route.link}
              icon={route.icon}
              label={route.name}
            />
          ))}
        </div>
      </div>
      <MenuScrollDownButton
        onClick={handleScrollDown}
        hide={hide}
        isInViewport={false}
        className="min-[700]:right-14 min-[700]:bottom-5 absolute bottom-3 right-3 block xl:right-40"
      />
    </section>
  );
};

export default PaginationMenu;
