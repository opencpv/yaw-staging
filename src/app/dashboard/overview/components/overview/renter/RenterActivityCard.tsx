import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { FaCopy, FaRegCopy } from "react-icons/fa";

type Props = {
  type: "applications" | "reviews" | "products";
  count: number;
  href: string;
};

const RenterActivityCard = ({ type, count, href }: Props) => {
  return (
    <div className="flex flex-col min-[340px]:flex-row flex-1 min-[340px]:items-center gap-5 rounded-xl border-l-4 border-l-accent-50 bg-white px-8 py-5 shadow-2xl max-w-sm md:max-w-none">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-accent-50">
        <FaRegCopy size={24} />
      </div>
      <div className="space-y-2 xs:min-w-fit">
        <h4 className="font-normal capitalize">
          {type === "applications"
            ? "Approved Applications"
            : type === "products"
              ? "Products"
              : "Reviews"}
        </h4>
        <h2 className="font-bold">{count}</h2>
        <Button
          href={href}
          color="accent"
          radius="full"
          padding="sm"
        >
          See Details
        </Button>
      </div>
    </div>
  );
};

export default RenterActivityCard;
