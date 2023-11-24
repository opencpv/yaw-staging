"use client";
import React from "react";
import { ConfigProvider, Input } from "antd";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ placeholder, onPressEnter }: SearchInputProps) => {
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
        onPressEnter={onPressEnter}
      />
    </ConfigProvider>
  );
};

export default SearchInput;
