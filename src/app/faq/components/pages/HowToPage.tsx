"use client";
import React, { useEffect, useState } from "react";
import HowToVideosSection from "../how_to/HowToVideosSection";
import OptionFilterTabs from "@/components/__shared/ui/tabs";
import capitalizeName from "@/lib/utils/stringManipulation";
import { HowTo } from "../../../../../interfaces";

type Props = {
  tags: any;
  howtos: any;
};

const HowToPage = (props: Props) => {
  const [content, setcontent] = useState<any>(props.howtos);
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
            ...props.tags.map((item: any) => capitalizeName(item.tag)),
          ]}
          selectedKey={value}
          onSelectionChange={(key) => setValue(key as string)}
          radius="small"
          tabColor="colored"
          classNames={{
            tabList: "flex-nowrap",
          }}
        />
      </div>
      <HowToVideosSection content={content} />
    </div>
  );
};

export default HowToPage;
