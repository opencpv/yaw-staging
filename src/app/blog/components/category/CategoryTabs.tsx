"use client";
// import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import convertSlugToString from "@/lib/utils/convertSlugToString";
import slugify from "@/lib/utils/slugify";
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
    setOptions(["all", ...props.categories]);
    changeCategoryOption(currentCategory as string);
  }, [changeCategoryOption, props.categories, url]);

  return (
    // <OptionFilterTabs
    //   options={options}
    //   selectedKey={categoryOption}
    //   onSelectionChange={(selection) => {
    //     changeCategoryOption(selection as string);
    //     router.push(`/blog/${slugify(selection as string)}`, { scroll: false });
    //   }}
    //   radius="small"
    //   tabColor="colored"
    //   classNames={{
    //     tabList: "flex-nowrap",
    //   }}
    // />
    <></>
  );
};

export default CategoryTabs;
