"use client";
import React from "react";
import Callout from "@/app/dashboard/components/Callout";
import { BsPatchExclamation } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import Button from "@/components/__shared/ui/button/Button";
import { useRouter } from "next/navigation";
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
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-primary-400 p-2 px-4 capitalize text-white">
        <h3 className="min-w-fit font-normal">{title}</h3>
        {locked ? (
          <CiLock className="text-lg font-[600] text-accent-100" />
        ) : (
          <Button
            href={
              title === "Be My Agent"
                ? "/dashboard/my-agent"
                : "/dashboard/my-search/be-the-first-to-know"
            }
            radius="full"
            padding="sm"
            className="w-fit bg-neutral-100 text-neutral-800"
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
            {title === "Be The First To Know" && (
              <p className="leading-normal">
                Upgrade now to unlock this exclusive feature and supercharge
                your renting experience
              </p>
            )}
            {title === "Be My Agent" && (
              <p className="leading-normal">
                You have no record for this service
              </p>
            )}
            {title === "Be The First To Know" && (
              <Button
                href={href}
                variant="ghost"
                className="text-base font-[700] capitalize text-[#45808B] underline"
              >
                Learn more
              </Button>
            )}
            {title === "Be My Agent" && (
              <Button
                href={href}
                variant="ghost"
                className="text-base font-[700] capitalize text-[#45808B] underline"
              >
                Get started
              </Button>
            )}
          </div>
        </Callout>
      ) : (
        // user paid features
        <>
          {title === "Be My Agent" && (
            <section className="space-y-6">
              <PaidFeature
                image="/assets/images/leaseform/listing1.jpg"
                title="Lorem ipsum dolor sit amet."
                description="Lorem ipsum dolor sit amet."
                matches={6}
              />
              <PaidFeature
                image="/assets/images/leaseform/listing1.jpg"
                title="My Dream Home"
                description="Lorem ipsum dolor sit amet."
                matches={6}
              />
            </section>
          )}
          {title === "Be The First To Know" && (
            <section className="space-y-6">
              <PaidFeature
                image="/assets/images/leaseform/listing1.jpg"
                title="Lorem ipsum dolor sit amet."
                description="Lorem ipsum dolor sit amet."
                matches={6}
              />
              <PaidFeature
                image="/assets/images/leaseform/listing1.jpg"
                title="My Dream Home"
                description="Lorem ipsum dolor sit amet."
                matches={6}
              />
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default FeatureExplainer;
