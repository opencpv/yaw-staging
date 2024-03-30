"use client";
import React, { useState } from "react";
import { ConfigProvider, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { BLOG_CATEGORY_QUERY } from "@/lib/utils/sanity/queries";

const SearchInput = ({ placeholder, onPressEnter }: SearchInputProps) => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: "#45808B",
            hoverBorderColor: "#45808B",
          },
        },
      }}
    >
      <Input
        size="large"
        placeholder={placeholder ? placeholder : "Search"}
        prefix={<CiSearch className="text-neutral-500" />}
        allowClear
        onChange={(e) => setSearchText(e.target.value)}
        onPressEnter={async () => {
          const blogCategoriesData: any =
            await loadQuery<SanityDocument[]>(BLOG_CATEGORY_QUERY);
          console.log(blogCategoriesData);
        }}
      />
    </ConfigProvider>
  );
};

export default SearchInput;
