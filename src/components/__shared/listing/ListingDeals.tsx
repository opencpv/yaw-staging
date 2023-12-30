import Tooltip from "@/components/ui/Tooltip";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { ListingCardInterface } from "../../../../interfaces";

const ListingDeals = (props: ListingCardInterface) => {
  const { icons } = useAssets();
  return (
    <div className="absolute z-10 flex items-center justify-between w-full top-4 text-neutral-900">
      <div
        className={`ml-4 rounded-md bg-white px-3 py-2 shadow-md ${
          props.membership === "Unverified" && "invisible"
        }`}
      >
        <div className="flex items-center gap-2">
          {props.deal === "Best Value" && (
            <>
              <Image
                src={icons.BestValue}
                alt={props.deal?.toLowerCase()}
                height={14}
                width={14}
              />
              <p className="text-xs">Best Value</p>
            </>
          )}
          {props.deal === "Editor's Choice" && (
            <>
              <Image
                src={icons.EditorsChoice}
                alt={props.deal?.toLowerCase()}
                height={14}
                width={14}
              />
              <p className="text-xs">Editor&apos;s Choice</p>
            </>
          )}
          {props.deal === "Price Drop" && (
            <>
              <Image
                src={icons.PriceDrop}
                alt={props.deal?.toLowerCase()}
                height={14}
                width={14}
              />
              <p className="text-xs">Price Drop</p>
            </>
          )}
          {(props.deal === "None" ||
            props.deal === "none" ||
            props.deal === "") && <></>}
        </div>
      </div>
      {/* Membership */}
      {props.membership === "Certified" && (
        <div className="mr-4 shadow-2xl">
          <Tooltip content={props.membership}>
            <Image
              src={icons.Certified}
              alt={props.membership?.toLowerCase()}
              height={35}
              width={35}
              className="shadow-2xl"
            />
          </Tooltip>
        </div>
      )}
      {props.membership === "Verified" && (
        <div className="mr-4 shadow-2xl">
          <Tooltip content={props.membership}>
            <Image
              src={icons.Verified}
              alt={props.membership?.toLowerCase()}
              height={35}
              width={35}
              className="shadow-2xl"
            />
          </Tooltip>
        </div>
      )}
      {props.membership === "Unverified" && (
        <div className="mr-4 shadow-2xl">
          <div className="ml-4 rounded-md bg-accent-50 px-4 py-2 text-xs font-[600] text-yellow-950 shadow-md">
            Not Verified
          </div>
        </div>
      )}
      {(props.membership === "None" ||
        props.membership === "none" ||
        props.membership === "") && (
        <div className="mr-4 shadow-2xl">
          <></>
        </div>
      )}
    </div>
  );
};

export default ListingDeals;
