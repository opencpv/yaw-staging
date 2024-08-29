"use client";
import React from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { LinkButton } from "@/components/__shared/ui/button";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { FaChevronLeft } from "react-icons/fa";
import dynamic from "next/dynamic";
const BlockUserPopOver = dynamic(() => import("./BlockUserPopOver"));

type Props = {
  userName: string;
};

const UsernameDisplayBar = ({ userName }: Props) => {
  const { icons } = useAssets();
  const { currentRole } = useDashboardStore();

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between gap-x-4 rounded-xl bg-primary-400 p-4 text-white">
      <LinkButton
        variant="ghost"
        href={`/dashboard/${currentRole}/messages`}
        className="lg:hidden"
      >
        <FaChevronLeft className="text-white" />
        {/* <Image src={icons.ArrowIcon} alt="back" className="text-3xl" /> */}
      </LinkButton>
      <h2 className="text-xl">{userName}</h2>
      <BlockUserPopOver />
    </div>
  );
};

export default UsernameDisplayBar;
