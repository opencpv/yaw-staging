"use client";
import React from "react";
import CategoryTabs from "./CategoryTabs";
import SearchInput from "@/components/__shared/ui/form/search-input";

type Props = {
  categories: string[];
  handleSearch: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TabsAndSearch = ({ handleSearch, categories, onChange }: Props) => {
  return (
    <div className="mb-10 flex flex-col gap-5">
      <div className="w-full max-w-2xl flex-1">
        <SearchInput onEnter={handleSearch} onChange={onChange} />
      </div>
      <div className="hidden-scrollbar flex-1 overflow-x-auto">
        <CategoryTabs categories={categories} />
      </div>
    </div>
  );
};

export default TabsAndSearch;
