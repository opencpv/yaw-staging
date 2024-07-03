import React from "react";
import MatchLabel from "./MatchLabel";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import BTFTKModal from "./steps/BTFTKModal";
import ManageButton from "./ManageButton";

const NoMatchEmptyState = () => {
  const { icons } = useAssets();

  return (
    <div>
      <div className="flex gap-5">
        <BTFTKModal float />
        <ManageButton />
      </div>
      <div className="relative mt-48 w-fit">
        <Image
          src={icons.HouseSearch}
          alt="magnifying glass and house"
          width={400}
          className="opacity-50"
        />
        <MatchLabel />
      </div>
    </div>
  );
};

export default NoMatchEmptyState;
