"use client";
import React from "react";
import CategoryTabs from "./CategoryTabs";
import SearchInput from "@/components/__shared/form/SearchInput";

type Props = {};

const TabsAndSearch = (props: Props) => {
  return (
    <>
      <div className="flex-1">
        <CategoryTabs />
      </div>
      <div className="flex-1 w-full md:w-9/12">
        <SearchInput onPressEnter={() => console.log("hi")} />
      </div>
    </>
  );
};

export default TabsAndSearch;
