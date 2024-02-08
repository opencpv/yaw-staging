"use client";
import React from "react";
import HowToVideosSection from "../how_to/HowToVideosSection";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useHowToTabsStore } from "@/store/faq/useFaqStore";
import Select from "@/app/dashboard/components/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

type Props = {};

const HowToPage = (props: Props) => {
  const activeTab = useHowToTabsStore((state) => state.activeTab);

  const setActiveTab = useHowToTabsStore((state) => state.setActiveTab);

  const { value, handleSelectionChange } = useSelectDisclosure<
    "all" | "renters" | "service pros" | "listing" | "searching" | "payment"
  >("all");

  // useHashChangeScroll()

  return (
    <div className="pt-16">
      <div className="mb-8">
        <Select
          options={[
            "All",
            "Renters",
            "Service Pros",
            "Listing",
            "Searching",
            "Payment",
          ]}
          value={value}
          className="mx-0"
          variant="ghost"
          color="primary"
          handleSelectionChange={handleSelectionChange}
        />
      </div>
      <HowToVideosSection />
    </div>
  );
};

export default HowToPage;
