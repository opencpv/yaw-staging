"use client";
import React from "react";
import { CiLock } from "react-icons/ci";
import { LinkButton } from "@/components/__shared/ui/button";
import { useRouter } from "next/navigation";
import { RenterPaidFeatureInterface } from "../../../../../../interfaces";
import PaidFeature from "./PaidFeature";
import CallOut from "@/components/__shared/ui/callout";

const FeatureExplainer = ({
  title,
  className,
  href,
  locked,
}: RenterPaidFeatureInterface) => {
  const router = useRouter();
  return (
    <div
      className={`w-full xs:max-lg:max-w-md lg:max-w-full ${
        locked ? "space-y-4" : "space-y-6"
      } ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-primary-400 p-2 px-4 capitalize text-white">
        <h3 className="min-w-fit font-normal">{title}</h3>
        {locked ? (
          <CiLock className="text-lg font-[600] text-accent-100" />
        ) : (
          <LinkButton
            href={
              title === "Be My Agent"
                ? "my-agent/agent?sk=true"
                : "be-the-first-to-know"
            }
            radius="full"
            size="sm"
            className="bg-neutral-100 text-neutral-800"
          >
            See all
          </LinkButton>
        )}
      </div>
      {locked ? (
        // callout info
        <CallOut>
          <div>
            {title === "Get Notified" && (
              <small>
                Upgrade now to unlock this exclusive feature and supercharge
                your renting experience
              </small>
            )}
            {title === "Be My Agent" && (
              <small>You have no record for this service</small>
            )}
            {title === "Get Notified" && (
              <LinkButton
                href={href}
                variant="ghost"
                className="font-[700] capitalize text-[#45808B] underline"
              >
                Learn more
              </LinkButton>
            )}
            {title === "Be My Agent" && (
              <LinkButton
                href={href}
                variant="ghost"
                className="text-base font-[700] capitalize text-[#45808B] underline"
              >
                Get started
              </LinkButton>
            )}
          </div>
        </CallOut>
      ) : (
        // user paid features
        <>
          {title === "Be My Agent" && (
            <section className="space-y-6">
              <PaidFeature
                image="/assets/images/Stock.jpg"
                title="Lorem ipsum dol"
                description="Lorem ipsum dolor sit amet."
                matches={6}
              />
              <PaidFeature
                image="/assets/images/Stock.jpg"
                title="My Dream Home"
                description="Lorem ipsum dolor sit amet."
                matches={6}
              />
            </section>
          )}
          {title === "Get Notified" && (
            <section className="space-y-6">
              <PaidFeature
                image="/assets/images/Stock.jpg"
                title="Lorem ipsum do lo"
                description="Lorem ipsum dolor sit amet."
                matches={6}
              />
              <PaidFeature
                image="/assets/images/Stock.jpg"
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
