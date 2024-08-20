"use client";
import Button from "@/components/__shared/ui/button/Button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/FramerWrapper"),
);

type Props = {};

const SellYourItem = (props: Props) => {
  const router = useRouter();
  const { icons } = useAssets();
  return (
    <div className="shadow-large flex w-full items-center justify-center rounded-xl py-24">
      <div className="flex flex-wrap justify-center gap-y-3 px-8 xs:px-16">
        <FramerWrapper>
          <Image
            src={icons.PeopleSell}
            alt="Two people handshaking"
            width={200}
            height={200}
          />
        </FramerWrapper>
        <div className="space-y-3">
          <h4 className="font-[600] capitalize">
            Moving? Sell slightly used items
          </h4>
          <p className="mb-1 text-sm capitalize text-neutral-600">
            Your Exclusive Marketplace, Completely Fee-Free
          </p>
          <Button
            href="sell-products"
            color="primary"
            className="w-full p-2 px-4 text-sm capitalize"
          >
            Add Sale Item <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellYourItem;
