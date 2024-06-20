"use client";
import React, { useEffect, useState } from "react";
import HowToVideosSection from "../how_to/HowToVideosSection";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
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
  // const { value, handleSelectionChange } = useSelectDisclosure<string>("all");
  const [value, setValue] = useState("all");

  function filterByTag(array: HowTo[], tag: string) {
    return array.filter((item) =>
      item.tags.some((t) => t.tag.toLowerCase() === tag),
    );
  }
  useEffect(() => {
    const data = props.howtos;
    if (value === "all") {
      setcontent(data);
    } else {
      setcontent(filterByTag(data, value));
    }
  }, [value, props.howtos]);

  return (
    <div className="pt-12">
      <div className="hidden-scrollbar mb-8 overflow-x-auto">
        <OptionFilterTabs
          options={[
            "All",
            ...props.tags.map((item: any, index: number) =>
              capitalizeName(item.tag),
            ),
          ]}
          selectedKey={value}
          onSelectionChange={(key) => setValue(key as string)}
          radius="small"
          tabColor="colored"
          classNames={{
            tabList: "flex-nowrap",
          }}
        />
        {/* <Select
          options={}
          value={value}
          className="mx-0"
          color="primary"
          handleSelectionChange={handleSelectionChange}
        /> */}
      </div>
      <HowToVideosSection content={content} />
    </div>
  );
};

export default HowToPage;
