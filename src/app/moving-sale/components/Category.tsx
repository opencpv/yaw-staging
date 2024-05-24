"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Category = ({ category, image }: CategoryProps) => {
  const searchParams = useSearchParams();
  const sort = searchParams?.get("sort") || "newest";
  const categories = searchParams?.get("categories") || "";
  const condition = searchParams?.get("condition") || "";
  const term = searchParams?.get("term") || "";
  const priceRangeFrom = searchParams?.get("priceRangeFrom") || "";
  const priceRangeTo = searchParams?.get("priceRangeTo") || "";

  return (
    <Link
      href={`/moving-sale?${new URLSearchParams({
        category,
        sort,
        categories,
        condition,
        term,
        priceRangeFrom,
        priceRangeTo,
      })}`}
      scroll={false}
      className={`relative flex h-40 min-w-[150px] max-w-[150px] items-center justify-center text-center text-sm text-white`}
    >
      <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
      <div className="absolute h-full w-full bg-opacity-20 bg-gradient-to-b from-primary-500 to-transparent"></div>
      <div className="relative z-10 space-y-2.5 p-10">
        <h4 className="relative z-10 font-[600] capitalize">{category}</h4>
      </div>
    </Link>
  );
};

export default Category;
