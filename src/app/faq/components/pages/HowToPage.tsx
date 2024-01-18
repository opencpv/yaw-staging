"use client"
import React from "react";
import HowToVideosSection from "../how_to/HowToVideosSection";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useHowToTabsStore } from "@/store/faq/useFaqStore";

type Props = {};

const HowToPage = (props: Props) => {
  const activeTab = useHowToTabsStore((state) => state.activeTab);
  const setActiveTab = useHowToTabsStore((state) => state.setActiveTab);

  // useHashChangeScroll()

  return (
    <div>
      <div className="mb-8">
      <OptionFilterTabs
        options={["all", "renters", "service pros", "listing", "searching", "payment"]}
        selectedKey={activeTab}
        onSelectionChange={setActiveTab}
        radius="small"
      />
      </div>
      <HowToVideosSection />
    </div>
  );
};

export default HowToPage;
