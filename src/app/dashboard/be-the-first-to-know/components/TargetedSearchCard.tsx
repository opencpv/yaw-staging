"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaRegEyeSlash } from "react-icons/fa6";
import MatchLabel from "./MatchLabel";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import MatchCount from "./MatchCount";
import EditButton from "@/components/__shared/ui/button/EditButton";
import ButtonDelete from "@/components/__shared/ui/button/ButtonDelete";
import { IoEyeOutline } from "react-icons/io5";
import Button from "@/components/__shared/ui/button/Button";

export type TargetedSearchState = "match" | "no matches";

type Props = {
  href: string;
  property: {
    image: string | StaticImageData;
    name: string;
  };
  state: TargetedSearchState;
  count: number;
};

const TargetedSearchCard = ({ href, property, state, count }: Props) => {
  const { icons } = useAssets();
  const [isClickable, setIsClickable] = React.useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setIsClickable(true);
    }, 500);
  };

  return (
    <div>
      <MatchCount
        href={href}
        count={count}
        className={`${state === "no matches" && "invisible"}`}
      />
      {state === "match" ? (
        <div className="group relative h-[26rem] w-full rounded-2xl bg-neutral-100">
          <div
            className="absolute inset-0 z-10 flex h-full w-full items-center justify-center rounded-[inherit] bg-black bg-opacity-30 opacity-0 transition-all delay-300 group-hover:opacity-100"
            onClick={handleClick}
          >
            <div className="flex flex-col items-center gap-3">
              <Button
                href={href}
                className={`min-h-unit-12 gap-3 rounded-xl bg-neutral-100 px-6 text-lg font-semibold text-neutral-400 sm:pointer-events-auto ${
                  !isClickable && "pointer-events-none"
                }`}
              >
                View Matches
                <IoEyeOutline className="text-neutral-800" />
              </Button>
            </div>
          </div>
          <Image
            src={property.image}
            alt={property.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[inherit]"
          />
          <MatchLabel state={state} />
        </div>
      ) : (
        <div className="relative -mt-12 grid h-[26rem] w-full place-items-center rounded-2xl border md:mt-0">
          <Image
            src={icons.HouseSearch}
            alt="magnifying glass and house"
            width={350}
            className="rounded-[inherit] opacity-40"
          />
          <MatchLabel state={state} />
        </div>
      )}

      <div className="mt-5 flex flex-wrap justify-between gap-5 px-5 text-neutral-600">
        <div className="">
          <h3>Search Title One</h3>
          <h4 className="font-normal">Kumasi</h4>
        </div>
        <div className="flex items-center gap-2">
          <EditButton onOpen={() => ""} />
          <ButtonDelete onOpen={() => ""} />
        </div>
      </div>
    </div>
  );
};

export default TargetedSearchCard;
