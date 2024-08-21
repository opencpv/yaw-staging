"use client";
import React from "react";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import dynamic from "next/dynamic";
const Menu = dynamic(() => import("../ui/NavMenu"), {
  ssr: false,
});

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
