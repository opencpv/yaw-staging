import Tooltip from "@/components/ui/Tooltip";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { ListingCardInterface } from "../../../../interfaces";

const ListingDeals = (props: Partial<ListingCardInterface>) => {
  const { icons } = useAssets();
  return (
    <div className="absolute top-4 z-10 flex w-full items-center justify-between text-neutral-900">
      <div
        className={`ml-4 rounded-md bg-white px-3 py-2 shadow-md ${
          !props.guarantee && "invisible"
        }`}
      >
        {/* Hint */}
        <div className="flex items-center gap-2">
          {props.hint === "Realtor's Choice" ? (
            <>
              <Image
                src={icons.EditorsChoice}
                alt={props.hint?.toLowerCase()}
                height={14}
                width={14}
              />
              <p className="text-xs">Realtor&apos;s Choice</p>
            </>
          ) : props.hint === "Best Value" ? (
            <>
              <Image
                src={icons.BestValue}
                alt={props.hint?.toLowerCase()}
                height={14}
                width={14}
              />
              <p className="text-xs">Best Value</p>
            </>
          ) : props.hint === "Top Rated" ? (
            <>
              <Image
                src={icons.BestValue} // TODO: change to best value
                alt={props.hint?.toLowerCase()}
                height={14}
                width={14}
              />
              <p className="text-xs">Top Rated</p>
            </>
          ) : null}
        </div>
      </div>
      {/* Guarantee */}
      {props.guarantee === "Verified" ? (
        <div className="mr-4 shadow-2xl">
          <Tooltip content={props.guarantee}>
            <Image
              src={icons.Verified}
              alt={props.guarantee?.toLowerCase()}
              height={35}
              width={35}
              className="shadow-2xl"
            />
          </Tooltip>
        </div>
      ) : props.guarantee === "Certified" ? (
        <div className="mr-4 shadow-2xl">
          <Tooltip content={props.guarantee}>
            <Image
              src={icons.Certified}
              alt={props.guarantee?.toLowerCase()}
              height={35}
              width={35}
              className="shadow-2xl"
            />
          </Tooltip>
        </div>
      ) : null}
    </div>
  );
};

export default ListingDeals;
