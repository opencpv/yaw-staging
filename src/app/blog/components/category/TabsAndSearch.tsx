"use client";
import React from "react";
import CategoryTabs from "./CategoryTabs";
import SearchInput from "@/components/__shared/form/SearchInput";

type Props = {
  categories: string[];
};

const TabsAndSearch = (props: Props) => {
  return (
    <>
      <div className="flex-1">
        <CategoryTabs categories={props.categories} />
      </div>
      <div className="w-full flex-1 md:w-9/12">
        <SearchInput onPressEnter={() => null} />
      </div>
    </>
  );
};

export default TabsAndSearch;
