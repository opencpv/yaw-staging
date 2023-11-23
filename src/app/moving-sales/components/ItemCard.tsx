import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemCard = ({ description, title, image, price, href }: ItemProps) => {
  return (
    <Link href={`${href}`}>
      <div className="text-sm">
        <div className="relative w-full mb-5 h-60">
          <Image
            src={image}
            alt=""
            fill
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h3 className="text-primary-500 font-[600] mb-2">{title}</h3>
        <p className="max-w-sm mb-2 text-neutral-500 line-clamp-3">{description}</p>
        <h3 className="text-lg font-[700] text-primary-500">GHS {price}</h3>
      </div>
    </Link>
  );
};

export default ItemCard;
