"use client";
import Button from "@/components/__shared/ui/button/Button";
import { useRouter } from "next/navigation";
import React from "react";
import style from "./Feature.module.css";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  tag?: "Free" | "Upgrade";
};

const ExploreFeatureCard = (props: Props) => {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden bg-primary-400 min-w-full flex-1 h-fit px-8 pt-40 pb-20 rounded-xl shadow-large xs:min-w-[20rem]">
      {props.tag === "Free" ? (
        <div className={`text-[#545454] ${style.ribbonFree}`}>Free</div>
      ) : props.tag === "Upgrade" ? (
        <div className={`text-white ${style.ribbonUpgrade}`}>Upgrade</div>
      ) : null}

      <div className="text-center space-y-5 text-white">
        <h2 className="">{props.title}</h2>
        <p className="text-sm line-clamp-3">{props.description}</p>
        <Link href={`${props.href}`} className="inline-block w-full">
          <Button
            className="w-full bg-white/60 text-white"
            arrowIcon
          >
            Explore
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreFeatureCard;
