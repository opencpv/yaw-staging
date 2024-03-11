"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string | null;
  email?: string;
  size?: "sm" | "lg";
  className?: string;
};

const Avatar = ({ image, name, className, email, size }: Props) => {
  return (
    <Image
      src={image}
      alt={name as string}
      width={50}
      height={50}
      className={cn(
        "size-[35px] max-w-[50px] shrink-0 cursor-pointer rounded-full",
        className,
        {
          "xs:size-[35px]": size === "sm",
          "xs:size-[50px]": size !== "sm",
        },
      )}
    />
  );
};

export default Avatar;
