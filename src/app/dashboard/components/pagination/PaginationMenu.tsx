"use client";

import React from "react";
import style from "../../Dashboard.module.css";
import Logo from "@/components/__shared/Logo";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";
import PaginationMenuItem from "./PaginationMenuItem";
import { FaEye } from "react-icons/fa";
import { PgRoutesRenter } from "./links";

const PaginationMenu = () => {
  const { isOpen, setIsOpen } = useDashboardMenuStore();

  useHideDocumentScrollBar(isOpen);

  return (
    <section
      className={`${style.paginationMenu} ${
        isOpen
          ? `${style.paginationMenuVisible}`
          : `${style.paginationMenuHidden}`
      }`}
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
        <div className="grid grid-cols-3 gap-x-5 gap-y-20">
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
    </section>
  );
};

export default PaginationMenu;
