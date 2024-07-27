import React from "react";
import Image, { StaticImageData } from "next/image";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Link from "next/link";

type Props = {
  id: number;
  image: string | StaticImageData;
  title: string;
  price: number;
  isActive: boolean;
};

const ItemCard = (props: Props) => {
  return (
    <div className="w-full min-w-[200px] flex-1 space-y-3 max-lg:max-w-xs">
      <Link
        href={`/moving-sale/${props.id}`}
        className="relative block aspect-video w-full rounded-lg"
      >
        <Image
          src={props.image}
          alt={props.title}
          fill
          className="rounded-[inherit] object-cover"
        />
      </Link>
      <h4>{props.title}</h4>
      {props.isActive ? (
        <p className="text-base">{formatPrice(props.price)}</p>
      ) : (
        <button className="text-base font-bold text-primary">Continue</button>
      )}
    </div>
  );
};

export default ItemCard;
