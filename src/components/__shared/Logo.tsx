"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    className?: string;
    size?: "sm" | "md" | "lg"
};

const Logo = ({className, size}: Props) => {
  const { icons } = useAssets();
  return (
    <div className={`relative aspect-square ${size === "md" ? "w-28" : size === "lg" ? "w-32" : "w-24"} ${className}`}>
      <Link href="/">
        <Image
          src={icons.Logo}
          alt="RentRightGH logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
