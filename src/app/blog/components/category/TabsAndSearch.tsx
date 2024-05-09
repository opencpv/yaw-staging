"use client";
import React from "react";
import CategoryTabs from "./CategoryTabs";
import SearchInput from "@/components/__shared/ui/form/SearchInput";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { BLOG_CATEGORY_QUERY } from "@/lib/utils/sanity/queries";

type Props = {
  categories: string[];
};

const TabsAndSearch = (props: Props) => {
  const [searchText, setSearchText] = React.useState<string>("");

  return (
    <div className="mb-10 flex flex-col gap-5">
      <div className="w-full max-w-2xl flex-1">
        <SearchInput
          onPressEnter={async () => {
            const blogCategoriesData: any =
              await loadQuery<SanityDocument[]>(BLOG_CATEGORY_QUERY);
          }}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <CategoryTabs categories={props.categories} />
      </div>
    </div>
  );
};

export default TabsAndSearch;
