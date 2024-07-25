import React from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Link from "next/link";

type Props = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const ItemCard = (props: Props) => {
  return (
    <Link
      href={`/moving-sale/${props.id}`}
      className="w-full min-w-[200px] flex-1 space-y-3 max-lg:max-w-xs"
    >
      <div className="relative aspect-video w-full rounded-lg">
        <Image
          src={props.image}
          alt={props.title}
          fill
          className="rounded-[inherit] object-cover"
        />
      </div>
      <h4>{props.title}</h4>
      <p className="text-base">{formatPrice(props.price)}</p>
    </Link>
  );
};

export default ItemCard;
