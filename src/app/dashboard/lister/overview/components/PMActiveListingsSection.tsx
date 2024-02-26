"use client";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import React, { useState } from "react";
import ActiveListingCard from "./ActiveListingCard";
import Button from "@/components/__shared/ui/button/Button";
import LeadsSummary from "./LeadsSummary";
import Link from "next/link";

type Props = {};

const PMActiveListingsSection = (props: Props) => {
  const [activeListingOption, setActiveListingOption] = useState<
    "properties" | "moving sales"
  >("properties");
  return (
    <section className="">
      <h2 className="mb-5 text-center">My Active Listings</h2>
      <div className="flex justify-center">
        <OptionFilterTabs
          options={["properties", "moving sales"]}
          selectedKey={activeListingOption}
          onSelectionChange={(key) =>
            setActiveListingOption(key as "properties" | "moving sales")
          }
        />
      </div>
      <div className="grid-auto-min-200 mt-4 gap-5">
        {[1, 2, 3].map((_, idx) => (
          <ActiveListingCard
            key={idx + 1}
            href=""
            itemType="Property"
            date="5 December 2023"
            image="/assets/images/about/home1.webp"
            location="Kasoa"
            itemName="2 Bedroom House at Kasoa"
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Link href="">
          <Button
            padding="sm"
            radius="full"
            className="my-10 w-fit bg-neutral-200 text-neutral-800"
          >
            See all
          </Button>
        </Link>
      </div>
      <LeadsSummary
        leads={[1, 2, 3].map((_, idx) => ({
          name: "Leslie Alexander",
          phone: "0232442111",
          id: `${idx + 1}`,
          email: "leslie@gmail.com",
        }))}
      />
    </section>
  );
};

export default PMActiveListingsSection;
