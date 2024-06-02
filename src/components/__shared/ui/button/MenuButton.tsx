"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";

type Props = {
  className?: string;
};

const MenuButton = ({ className }: Props) => {
  const setToggle = useMenuStore((state) => state.setToggle);
  const { icons } = useAssets();

  return (
    <div
      onClick={() => setToggle(true)}
      className={cn(
        "group mb-5 grid h-10 w-10 scale-80 place-items-center rounded-full p-2 transition-all hover:scale-105 hover:bg-slate-50/70 md:hidden",
        className,
      )}
      title="Menu"
    >
      <Image src={icons.Hamburger} alt="Menu" className="size-10" />
    </div>
  );
};

export default MenuButton;
