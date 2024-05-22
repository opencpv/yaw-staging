"use client";
import React, { useState } from "react";
import { ConfigProvider, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { cn } from "@/lib/utils";

const SearchInput = ({
  placeholder,
  onPressEnter,
  onChange,
  className,
}: SearchInputProps) => {
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
            onClick={onPressEnter}
          />
        }
        className={cn("max-w-2xl", className)}
        allowClear
        onChange={onChange}
        onPressEnter={onPressEnter}
      />
    </ConfigProvider>
  );
};

export default SearchInput;
