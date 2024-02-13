"use client";
import Button from "@/components/__shared/ui/button/Button";
import { useRouter } from "next/navigation";
import React from "react";
import style from "./Feature.module.css";
import Link from "next/link";

type Props = {
  title: "Be The First To Know" | "Be My Agent" | "My Favourites";
  description: string;
  href: string;
  tag?: "Free" | "Premium";
};

const ExploreFeatureCard = (props: Props) => {
  const router = useRouter();
  return (
    <div className="relative h-fit min-w-full flex-1 overflow-hidden rounded-xl bg-primary-400 px-8 pb-20 pt-40 shadow-large xs:min-w-[20rem]">
      {props.tag === "Free" ? (
        <div className={`text-[#545454] ${style.ribbonFree}`}>Free</div>
      ) : props.tag === "Premium" ? (
        <div className={`text-white ${style.ribbonUpgrade}`}>Premium</div>
      ) : null}

      <div className="flex flex-col items-center gap-5 text-center text-white">
        <h2 className="">{props.title}</h2>
        <p className="line-clamp-3 max-w-2xl text-sm">{props.description}</p>
        <Button
          href={props.href}
          className="w-full bg-white/60 text-white"
          arrowIcon
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default ExploreFeatureCard;
