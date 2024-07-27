import React from "react";
import { format } from "date-fns";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { pluralize } from "@/lib/utils/stringManipulation";

type Props = {
  id: number;
  image: string | StaticImageData;
  title: string;
  date: string;
  isActive: boolean;
};

const PropertyCard = (props: Props) => {
  const length = calculateDaysSinceCreation(props.date);

  return (
    <div
      className="w-full min-w-[200px] flex-1 space-y-3 max-lg:max-w-xs"
    >
      <Link 
      href={`/properties/${props.id}`}
        className="relative block aspect-video w-full rounded-lg">
        <Image
          src={props.image}
          alt={props.title}
          fill
          className="rounded-[inherit] object-cover"
        />
      </Link>
      <h4>{props.title || " - "}</h4>
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 text-shade-300">
        <p className="text-base">
          {format(new Date(props.date), "dd MMMM yyyy")}
        </p>
        {props.isActive ? (
        <p className="text-xs lg:text-base">
          {length} {pluralize("Day", length)} Ago
        </p>
        ) : (
        <button className="text-base font-bold text-primary">Continue</button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
