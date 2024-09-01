"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

type Props = {
  placeholder?: string;
  onEnter?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const SearchInput = ({ placeholder, onEnter, onChange, className }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter?.();
      inputRef.current?.blur();
    }
  };

  return (
    <Input
      name="search"
      type="search"
      placeholder={placeholder ? placeholder : "Search"}
      className={cn("max-w-2xl focus-visible:outline-primary/50", className)}
      onChange={onChange}
      onKeyDown={handleSearch}
      ref={inputRef}
    />
  );
};

export default SearchInput;
