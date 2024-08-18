"use client";
import React from "react";
import Menu from "../ui/NavMenu";
import { useMenuStore } from "@/store/navmenu/useMenuStore";

type Props = {
  children: React.ReactNode;
};

const MenuWrapper = ({ children }: Props) => {
  const toggle = useMenuStore((state) => state.toggle);
  return (
    <>
      <Menu isOpen={toggle} layout />
      {children}
    </>
  );
};

export default MenuWrapper;
