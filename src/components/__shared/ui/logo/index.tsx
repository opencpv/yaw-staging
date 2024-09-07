"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: () => void;
  url?: string;
};

const Logo = ({ className, size = "sm", onClick, url = "/" }: Props) => {
  const { icons } = useAssets();
  const { setToggle } = useMenuStore();
  const { setIsOpen } = useDashboardMenuStore();

  return (
    <Link href={url}>
      <Image
        src={icons.Logo}
        alt="RentRightGH logo"
        width={
          size === "md" ? 112 : size === "lg" ? 128 : size === "xs" ? 60 : 96
        }
        quality={100}
        className={`${className}`}
        onClick={() => {
          setToggle(false);
          setIsOpen(false);
          onClick;
        }}
      />
    </Link>
  );
};

export default Logo;
