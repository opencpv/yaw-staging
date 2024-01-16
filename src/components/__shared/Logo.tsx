"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const Logo = ({ className, size, onClick }: Props) => {
  const { icons } = useAssets();
  return (
    <Link href="/">
      <Image
        src={icons.Logo}
        alt="RentRightGH logo"
        width={size === "md" ? 112 : size === "lg" ? 128 : 96}
        quality={100}
        className={`${className}`}
        onClick={onClick}
      />
    </Link>
  );
};

export default Logo;
