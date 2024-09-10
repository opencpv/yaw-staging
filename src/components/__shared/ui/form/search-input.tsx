"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { SlMagnifier } from "react-icons/sl";

type Props = {
  placeholder?: string;
  onEnter?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

/**
 * A search input component with a magnifier icon and a clear button.
 */
const SearchInput = ({ placeholder, onEnter, onChange, className }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter?.();
      inputRef.current?.blur();
    }
  };

  return (
    <form className="group relative">
      <SlMagnifier
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 z-10 -mt-2.5 text-neutral-300 group-focus-within:text-primary-200 group-focus-within:transition-colors"
        aria-hidden="true"
      ></SlMagnifier>
      <Input
        name="search"
        type="search"
        placeholder={placeholder ? placeholder : "Search..."}
        className={cn(
          "max-w-2xl pl-10 focus-visible:border-primary-200 focus-visible:outline-0 focus-visible:ring-0",
          className,
        )}
        onChange={onChange}
        onKeyDown={handleSearch}
        ref={inputRef}
      />
    </form>
  );
};

export default SearchInput;
