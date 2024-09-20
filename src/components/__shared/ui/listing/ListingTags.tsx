import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { ListingCardInterface } from "../../../../../interfaces";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const Tooltip = dynamic(() =>
  import("@/components/__shared/ui/tooltip").then((mod) => mod.Tooltip),
);

const ListingTags = (props: Partial<ListingCardInterface>) => {
  const { icons } = useAssets();
  return (
    <div className="absolute top-4 z-10 flex w-full items-center justify-between text-neutral-900">
      <div
        className={cn("ml-4 rounded-md bg-white px-3 py-2 shadow-md", {
          "pointer-events-none invisible": !props.hint,
        })}
      >
        {/* Hint */}
        <Tooltip content={props.hint as string} className="xs:max-md:w-fit">
          <div className="flex items-center gap-2">
            {props.hint === "Realtor's Choice" ? (
              <>
                <Image
                  src={icons.EditorsChoice}
                  alt={props.hint}
                  height={14}
                  width={14}
                />
                <p className="text-xs">Realtor&apos;s Choice</p>
              </>
            ) : props.hint === "Best Value" ? (
              <>
                <Image
                  src={icons.BestValue}
                  alt={props.hint}
                  height={14}
                  width={14}
                />
                <p className="text-xs">Best Value</p>
              </>
            ) : props.hint === "Top Rated" ? (
              <>
                <Image
                  src={icons.BestValue} // TODO: change to best value
                  alt={props.hint}
                  height={14}
                  width={14}
                />
                <p className="text-xs">Top Rated</p>
              </>
            ) : null}
          </div>
        </Tooltip>
      </div>
      {/* Guarantee */}
      <Tooltip
        content={props.guarantee}
        className={cn({ hidden: !props.guarantee })}
      >
        <Image
          src={icons[props.guarantee as GuaranteeTag]}
          alt={props.guarantee || ""}
          height={35}
          width={35}
          className={cn("mr-4 shadow-2xl", { hidden: !props.guarantee })}
        />
      </Tooltip>
    </div>
  );
};

export default ListingTags;
