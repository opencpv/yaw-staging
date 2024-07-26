import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { pluralize } from "@/lib/utils/stringManipulation";

type Props = {
  id: number;
  image: string;
  title: string;
  date: string;
};

const PropertyCard = (props: Props) => {
  const length = calculateDaysSinceCreation(props.date);

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
        <p className="text-base">
          {format(new Date(props.date), "dd MMMM yyyy")}
        </p>
        <p className="text-xs lg:text-base">
          {length} {pluralize("Day", length)} Ago
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;
