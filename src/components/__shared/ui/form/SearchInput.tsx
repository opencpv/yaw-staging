"use client";
import React, { useState } from "react";
import { ConfigProvider, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { cn } from "@/lib/utils";

const SearchInput = ({
  placeholder,
  onSearch,
  onChange,
  className,
}: SearchInputProps) => {
  const inputRef = React.useRef<any>(null);

  const handleSearch = () => {
    onSearch();
    inputRef.current?.blur();
  };

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
        prefix={
          <CiSearch
            className="text-neutral-500 hover:cursor-pointer"
            onClick={handleSearch}
          />
        }
        className={cn("max-w-2xl", className)}
        allowClear
        onChange={onChange}
        onPressEnter={handleSearch}
        ref={inputRef}
      />
    </ConfigProvider>
  );
};

export default SearchInput;
