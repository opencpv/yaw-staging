"use client";
import React, { useRef } from "react";
import style from "../../Dashboard.module.css";
import Logo from "@/components/__shared/ui/Logo";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";
import PaginationMenuItem from "./PaginationMenuItem";
import { PgRoutesLister, PgRoutesRenter } from "./links";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";

const PaginationMenu = () => {
  const { isOpen, setIsOpen } = useDashboardMenuStore();
  const { currentRole } = useDashboardStore();
  const paginationMenuRef = useRef<HTMLElement>(null);

  useHideDocumentScrollBar(isOpen);

  return (
    <section
      className={`menu-bg ${style.paginationMenu} ${
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
          className="cursor-pointer transition-transform duration-300 hover:rotate-90"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="grid w-full gap-x-5 gap-y-10 sm:w-[initial] sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3">
          {currentRole === "RENTER" &&
            PgRoutesRenter.map((route) => (
              <PaginationMenuItem
                key={route.name}
                href={route.link}
                icon={route.icon}
                label={route.name}
              />
            ))}
          {currentRole === "LISTER" &&
            PgRoutesLister.map((route) => (
              <PaginationMenuItem
                key={route.name}
                href={route.link}
                icon={route.icon}
                label={route.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PaginationMenu;
