"use client";
import { Tabs } from "@/components/__shared/ui/tabs/tabs";
import convertSlugToString from "@/lib/utils/convertSlugToString";
import slugify from "@/lib/utils/slugify";
import capitalizeName, { unslugify } from "@/lib/utils/stringManipulation";
import { useBlogCategoryStore } from "@/store/blog/blogStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  categories: string[];
};

const CategoryTabs = (props: Props) => {
  const url = usePathname();
  const changeCategoryOption = useBlogCategoryStore(
    (state) => state.changeCategoryOption,
  );
  const categoryOption = useBlogCategoryStore((state) => state.filterOption);
  const router = useRouter();
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const currentCategory = convertSlugToString(url?.split("/")[2] as string);
    setOptions(["All", ...props.categories?.map((cat) => capitalizeName(cat))]);
    changeCategoryOption(currentCategory as string);
  }, [changeCategoryOption, props.categories, url]);

  return (
    <Tabs
      options={options}
      selectedKey={unslugify(capitalizeName(categoryOption))}
      onSelectionChange={(selection) => {
        changeCategoryOption(selection);
        router.push(`/blog/${slugify(selection)}`, { scroll: false });
      }}
    />
  );
};

export default CategoryTabs;
