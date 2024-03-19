"use client";
import React, { useEffect, useState } from "react";
import HowToVideosSection from "../how_to/HowToVideosSection";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useHowToTabsStore } from "@/store/faq/useFaqStore";
import Select from "@/app/dashboard/components/shared/ui/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import capitalizeName from "@/lib/utils/stringManipulation";
import { HowTo } from "../../../../../interfaces";

type Props = {
  tags: any;
  howtos: any;
};

const HowToPage = (props: Props) => {
  const activeTab = useHowToTabsStore((state) => state.activeTab);

  const setActiveTab = useHowToTabsStore((state) => state.setActiveTab);
  const [content, setcontent] = useState<any>(props.howtos);
  const { value, handleSelectionChange } = useSelectDisclosure<string>("all");

  function filterByTag(array: HowTo[], tag: string) {
    return array.filter((item) => item.tags.some((t) => t.tag === tag));
  }
  useEffect(() => {
    console.log("values", value);
    const data = props.howtos;
    if (value === "all") {
      setcontent(data);
    } else {
      setcontent(filterByTag(data, value));
    }
  }, [value]);

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
      <HowToVideosSection content={content} />
    </div>
  );
};

export default HowToPage;
