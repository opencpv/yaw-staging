"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

const SearchInput = ({ placeholder, onSearch, onChange, className }: any) => {
  const inputRef = React.useRef<any>(null);

  const handleSearch = () => {
    onSearch?.();
    inputRef.current?.blur();
  };

  return (
    <Input
      type="search"
      placeholder={placeholder ? placeholder : "Search"}
      prefix={""}
      className={cn("max-w-2xl", className)}
      onChange={onChange}
      // onKeyDown={handleSearch}
      ref={inputRef}
    />
  );
};

export default SearchInput;
