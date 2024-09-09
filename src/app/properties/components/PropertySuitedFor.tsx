import React from "react";
import style from "../Template.module.css";
import { cn } from "@/lib/utils";

type Props = {
  listing: Property;
};

const PropertySuitedFor = ({ listing }: Props) => {
  return (
    <div className="space-y-3">
      <p className="text-shade-500">This Property is best suited for</p>
      {listing?.suited_for && listing?.suited_for?.length > 0 && (
        <ul className="flex flex-wrap items-center gap-4">
          {listing?.suited_for?.map((suit: string) => (
            <li
              key={suit}
              className={cn(
                style.lightGreenBg,
                "rounded-md text-sm p-2 px-2.5 text-primary",
              )}
            >
              {suit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PropertySuitedFor;
