"use client";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useBlogCategoryStore } from "@/store/blog/blogStore";
import React from "react";

type Props = {};

const CategoryTabs = (props: Props) => {
  const categoryOption = useBlogCategoryStore((state) => state.filterOption);
  const changeCategoryOption = useBlogCategoryStore(
    (state) => state.changeCategoryOption
  );

  return (
    <OptionFilterTabs
      options={["all", "education", "entertainment", "news", "others"]}
      selectedKey={categoryOption}
      onSelectionChange={changeCategoryOption}
      radius="small"
    />
  );
};

export default CategoryTabs;
