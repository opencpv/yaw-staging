"use client";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import Button from "@/components/__shared/ui/button/Button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

const SellYourItem = (props: Props) => {
  const router = useRouter();
  const { icons } = useAssets();
  return (
    <div className="flex w-full items-center justify-center rounded-xl py-24 shadow-large">
      <div className="flex flex-wrap justify-center gap-y-3 px-8 xs:px-16">
        <AOSWrapper animation="zoom-in">
          <Image
            src={icons.PeopleSell}
            alt="Two people handshaking"
            width={200}
            height={200}
          />
        </AOSWrapper>
        <div className="space-y-3">
          <h4 className="font-[600] capitalize">Sell Your Item</h4>
          <p className="mb-1 text-sm capitalize text-neutral-600">
            Your Exclusive Marketplace, Completely Fee-Free
          </p>
          <Button
            href="/moving-sale"
            color="primary"
            className="w-full p-2 px-4 text-sm capitalize"
          >
            Add New Product <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellYourItem;
