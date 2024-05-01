"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";

type Props = {
  image: string | StaticImageData;
  name: string | null;
  email?: string;
  size?: "sm" | "lg";
  className?: string;
  display?: boolean;
  title?: string;
};

const Avatar = ({ image, name, className, title, size, display }: Props) => {
  return (
    <>
      {display !== undefined && display ? (
        <Image
          src={image || ""}
          alt={(name as string) || "avatar"}
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
          title={title}
        />
      ) : (
        <div
          className={cn(
            "grid size-[35px] max-w-[50px] shrink-0 cursor-pointer place-items-center rounded-full bg-white",
            className,
            {
              "xs:size-[35px]": size === "sm",
              "xs:size-[50px]": size !== "sm",
            },
          )}
        >
          <FaRegUser className="text-lg" />
        </div>
      )}
    </>
  );
};

export default Avatar;
