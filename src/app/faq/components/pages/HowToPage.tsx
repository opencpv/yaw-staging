"use client";
import React from "react";
import HowToVideosSection from "../how_to/HowToVideosSection";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useHowToTabsStore } from "@/store/faq/useFaqStore";
import Select from "@/app/dashboard/components/shared/ui/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import capitalizeName from "@/lib/utils/stringManipulation";

type Props = {
  tags: any;
};

const HowToPage = (props: Props) => {
  const activeTab = useHowToTabsStore((state) => state.activeTab);

  const setActiveTab = useHowToTabsStore((state) => state.setActiveTab);

  const { value, handleSelectionChange } = useSelectDisclosure<any>("All");

  // useHashChangeScroll()

  return (
    <div className="pt-16">
      <div className="mb-8">
        <Select
          options={[
            "All",
            ...props.tags.map((item: any, index: number) =>
              capitalizeName(item.tag),
            ),
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
