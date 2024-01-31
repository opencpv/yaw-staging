"use client";

import React from "react";
import style from "../../Dashboard.module.css";
import Logo from "@/components/__shared/Logo";
import Button from "@/components/__shared/ui/button/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";

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
      <div className=""></div>
    </section>
  );
};

export default PaginationMenu;
