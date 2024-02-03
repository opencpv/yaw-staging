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
  return (
    <div className="group">
      <MatchCount
        count={count}
        className={`${state === "no matches" && "invisible"}`}
      />
      {state === "match" ? (
        <Link href={href}>
          <div className="relative h-[26rem] w-full rounded-2xl bg-neutral-100">
            <Image
              src={property.image}
              alt={property.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[inherit] transition-all group-hover:brightness-90"
            />
            <MatchLabel state={state} />
          </div>
        </Link>
      ) : (
        <div className="relative grid h-[26rem] w-full place-items-center rounded-2xl border">
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
