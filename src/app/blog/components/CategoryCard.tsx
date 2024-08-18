"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({
  category,
  image,
  href,
  className,
}: CategoryCardProps) => {
  return (
    <Link href={`${href}`}>
      <div className={cn("relative aspect-square w-72", className)}>
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl md:rounded-3xl"
        />
        <div className="absolute bottom-0 w-full rounded-b-xl bg-neutral-800 bg-opacity-60 p-4 md:rounded-b-3xl">
          <p className="text-center text-sm text-white">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
