"use client";

import { cn } from "@/lib/utils";
import React, { FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SaveSearchModal from "../modals/SaveSearchModal";
import { LinkButton } from "../button";

type Props = {
  className?: string;
  inputClassName?: string;
  searchIconColor?: string;
  separatorClassName?: string;
  placeholder?: string;
  href?: string;
  name?: string;
  value?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputWithSavedSearch = ({
  className,
  inputClassName,
  searchIconColor,
  separatorClassName,
  onSubmit,
  onKeyDown,
  onInput,
  name,
  value,
  placeholder,
  href,
}: Props) => {
  const [showDivider, setShowDivider] = React.useState(false);

  return (
    <div className={cn("relative flex w-full items-center", className)}>
      <form
        className="relative grid h-full w-full grid-cols-12 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(e);
        }}
      >
        <input
          type="search"
          className={cn(
            "col-span-10 w-full bg-transparent text-neutral-800 outline-none focus:outline-none",
            inputClassName,
          )}
          placeholder={placeholder || "Madina, Accra"}
          name={name}
          value={value}
          onInput={(e) => {
            e.currentTarget.value !== ""
              ? setShowDivider(true)
              : setShowDivider(false);

            onInput?.(e);
          }}
          onKeyDown={onKeyDown}
        />
        <div
          className={cn(
            "col-span-1 mx-auto h-full w-[1px] bg-shade-50",
            separatorClassName,
          )}
          style={{ visibility: showDivider ? "visible" : "hidden" }}
        ></div>
        <LinkButton
          href={href}
          type="submit"
          variant={"ghost"}
          size={"icon"}
          className="col-span-1 mx-auto mr-2 min-w-max xs:mr-auto"
          title="search"
        >
          <AiOutlineSearch
            size="16"
            color={searchIconColor ?? "#737373"}
            className="mx-auto"
          />
        </LinkButton>
        {/* !!! COMMENTED OUT FOR NOW */}
        {/* <div className="deep-green-hover col-span-1 grid h-full w-full place-items-center">
          <SaveSearchModal className="mx-auto" />
        </div> */}
      </form>
    </div>
  );
};

export default InputWithSavedSearch;
