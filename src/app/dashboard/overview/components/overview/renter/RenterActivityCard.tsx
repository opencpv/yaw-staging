import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { FaCopy, FaRegCopy } from "react-icons/fa";

type Props = {};

const RenterActivityCard = (props: Props) => {
  return (
    <div className="flex w-fit min-w-full max-w-fit flex-1 flex-wrap items-center gap-5 rounded-xl border-l-4 border-l-accent-50 bg-white px-8 py-5 shadow-2xl xs:min-w-fit">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-accent-50">
        <FaRegCopy size={24} />
      </div>
      <div className="space-y-2 xs:min-w-fit">
        <h4 className="font-normal">Approved Applications</h4>
        <h2 className="font-bold">6</h2>
        <Button
          href=""
          color="accent"
          radius="full"
          padding="sm"
          className="h-unit-6"
        >
          See Details
        </Button>
      </div>
    </div>
  );
};

export default RenterActivityCard;
