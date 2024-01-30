import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineRateReview } from "react-icons/md";

type Props = {
  type: "applications" | "reviews" | "products";
  count: number;
  href: string;
};

const RenterActivityCard = ({ type, count, href }: Props) => {
  return (
    <div className="flex min-w-fit max-w-sm flex-1 flex-col gap-5 rounded-xl border-l-4 border-l-accent-50 bg-white px-8 py-5 shadow-2xl min-[340px]:flex-row min-[340px]:items-center md:max-w-none">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-accent-50">
        {type === "applications" && <FaRegCopy size={24} />}
        {type === "products" && <HiOutlineShoppingBag size={24} />}
        {type === "reviews" && <MdOutlineRateReview size={24} />}
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
        <Button href={href} color="accent" radius="full" padding="sm">
          See Details
        </Button>
      </div>
    </div>
  );
};

export default RenterActivityCard;
