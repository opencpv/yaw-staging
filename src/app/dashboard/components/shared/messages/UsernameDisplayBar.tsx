"use client";
import Image from "next/image";
import React from "react";
import BlockUserPopOver from "./BlockUserPopOver";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Button from "@/components/__shared/ui/button/Button";
import { usePathname } from "next/navigation";

type Props = {
  userName: string;
};

const UsernameDisplayBar = ({ userName }: Props) => {
  const { icons } = useAssets();
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between gap-x-4 rounded-xl bg-primary-400 p-4 text-white">
      <Button
        variant="ghost"
        href={
          pathname?.includes("/lister")
            ? "/dashboard/lister/messages"
            : "/dashboard/renter/messages"
        }
        className="flex lg:hidden"
      >
        <Image src={icons.ArrowIcon} alt="back" className="text-3xl" />
      </Button>
      <h2 className="text-xl">{userName}</h2>
      <BlockUserPopOver />
    </div>
  );
};

export default UsernameDisplayBar;
