"use client";
import React from "react";
import Callout from "@/app/dashboard/components/Callout";
import { BsPatchExclamation } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import Button from "@/components/__shared/ui/button/Button";
import { useRouter } from "next/navigation";
import { Router } from "lucide-react";
import Link from "next/link";
import { RenterPaidFeatureInterface } from "../../../../../interfaces";
import PaidFeature from "./PaidFeature";

const FeatureExplainer = ({
  title,
  className,
  href,
  locked,
}: RenterPaidFeatureInterface) => {
  const router = useRouter();
  return (
    <div
      className={`max-w-md ${locked ? "space-y-4" : "space-y-6"} ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-xl bg-primary-400 p-2 px-4 capitalize text-white">
        <h3 className="min-w-fit font-normal">{title}</h3>
        {locked ? (
          <CiLock className="text-lg font-[600] text-accent-100" />
        ) : (
          <Button
            href="/dashboard/overview"
            className="h-fit min-w-fit rounded-full bg-neutral-100 p-1.5 px-2.5 text-neutral-800"
          >
            See all
          </Button>
        )}
      </div>
      {locked ? (
        // callout info
        <Callout className="flex gap-2">
          <BsPatchExclamation className="shrink-0 text-lg text-accent-50" />
          <div className="text-base">
            <p className="leading-normal">
              Upgrade now to unlock this exclusive feature and supercharge your
              renting experience
            </p>
            {title === "Be The First To Know" && (
              <Link href={`${href}`} className="inline-block">
                <Button
                  variant="ghost"
                  className="text-base font-[700] capitalize text-[#45808B] underline"
                >
                  Learn more
                </Button>
              </Link>
            )}
            {title === "Be My Agent" && (
              <Link href={`${href}`} className="inline-block">
                <Button
                  variant="ghost"
                  className="text-base font-[700] capitalize text-[#45808B] underline"
                >
                  Learn more
                </Button>
              </Link>
            )}
          </div>
        </Callout>
      ) : (
        // user paid features
        <section className="space-y-6">
          <PaidFeature
            title="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet."
            matches={6}
          />
          <PaidFeature
            title="My Dream Home"
            description="Lorem ipsum dolor sit amet."
            matches={6}
          />
        </section>
      )}
    </div>
  );
};

export default FeatureExplainer;
