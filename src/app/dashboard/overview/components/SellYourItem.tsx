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
    <div className="flex items-center justify-center py-24 rounded-xl shadow-large w-full">
      <div className="flex flex-wrap gap-y-3 px-8 xs:px-16">
        <AOSWrapper animation="zoom-in">
          <Image src={icons.PeopleSell} alt="" width={200} height={200} />
        </AOSWrapper>
        <div className="space-y-3">
          <h4 className="font-[600] capitalize">Sell Your Item</h4>
          <p className="capitalize text-neutral-600 mb-1 text-sm">
            Your Exclusive Marketplace, Completely Fee-Free
          </p>
          <Link href="/moving-sales" className="inline-block w-full">
            <Button
              color="primary"
              className="p-2 w-full px-4 text-sm capitalize"
            >
              Add New Product <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellYourItem;
