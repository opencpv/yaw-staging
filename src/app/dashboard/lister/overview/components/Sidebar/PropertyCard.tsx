import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  image: string;
  title: string;
  date: string;
};

const PropertyCard = (props: Props) => {
  return (
    <Link
      href={`/properties/${props.id}`}
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
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 text-shade-300">
        <p className="text-base">5 December</p>
        <p className="text-xs lg:text-base">5 Days Ago</p>
      </div>
    </Link>
  );
};

export default PropertyCard;
