import { formatPrice } from "@/lib/utils/numberManipulation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemCard = ({ description, title, image, price, href }: ItemProps) => {
  return (
    <Link href={`${href}`}>
      <div className="text-sm">
        <div className="relative mb-5 h-60 w-full">
          <Image
            src={image}
            alt=""
            fill
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h4 className="mb-2 text-primary-500">{title}</h4>
        <p className="mb-2 line-clamp-3 text-base text-neutral-500 sm:max-w-sm">
          {description}
        </p>
        <h3 className="text-lg text-primary-500">{formatPrice(price)}</h3>
      </div>
    </Link>
  );
};

export default ItemCard;
