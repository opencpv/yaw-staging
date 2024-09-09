"use client";
import React, { useEffect, useState } from "react";
import HowToVideosSection from "../../../how-to/components/HowToVideosSection";
import { Tabs } from "@/components/__shared/ui/tabs";
import capitalizeName from "@/lib/utils/stringManipulation";
import { HowTo } from "../../../../../interfaces";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/dist/client/components/navigation";

type Props = {
  tags: any;
  howtos: any;
};

const HowToPage = (props: Props) => {
  const router = useRouter();
  const [content, setcontent] = useState<any>(props.howtos);
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") || "All";
  const [value, setValue] = useState(category);

  function filterByTag(array: HowTo[], tag: string) {
    return array.filter((item) =>
      item.tags.some((t) => t.tag.toLowerCase() === tag.toLowerCase()),
    );
  }
  useEffect(() => {
    const data = props.howtos;
    if (category === "All") {
      setcontent(data);
    } else {
      setcontent(filterByTag(data, category));
    }
  }, [category, props.howtos]);

  const handleSelectionChange = (key: string) => {
    setValue(key);
    router.push(`?${new URLSearchParams({ category: key })}`, {
      scroll: false,
    });
  };

  return (
    <div className="pt-12">
      <div className="hidden-scrollbar mb-8 overflow-x-auto">
        <Tabs
          options={[
            "All",
            ...props.tags.map((item: any) => capitalizeName(item.tag)),
          ]}
          selectedKey={value}
          onSelectionChange={handleSelectionChange}
        />
      </div>
      <HowToVideosSection content={content} />
    </div>
  );
};

export default HowToPage;
