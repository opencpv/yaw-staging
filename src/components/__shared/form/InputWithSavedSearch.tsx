"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SaveSearchModal from "../modals/SaveSearchModal";

type Props = {
  className?: string;
  inputClassName?: string;
  searchIconColor?: string;
  separatorClassName?: string;
};

const InputWithSavedSearch = ({
  className,
  inputClassName,
  searchIconColor,
  separatorClassName,
}: Props) => {
  const [showDivider, setShowDivider] = React.useState(false);

  return (
    <div className={cn("relative flex w-full items-center", className)}>
      <div className="relative grid h-full w-full grid-cols-12 items-center">
        <input
          type="search"
          className={cn(
            "col-span-9 w-full bg-transparent text-neutral-800 outline-none focus:outline-none",
            inputClassName,
          )}
          placeholder="Madina, Accra"
          onInput={(e) =>
            e.currentTarget.value !== ""
              ? setShowDivider(true)
              : setShowDivider(false)
          }
        />
        <div
          className={cn(
            "col-span-1 mx-auto h-full w-[1px] bg-shade-50",
            separatorClassName,
          )}
          style={{ visibility: showDivider ? "visible" : "hidden" }}
        ></div>
        <Link
          href="/properties?sk=true"
          className="col-span-1 mx-auto mr-2 xs:mr-auto"
          title="search"
        >
          <AiOutlineSearch
            size="16"
            color={searchIconColor ?? "#737373"}
            className="mx-auto"
          />
        </Link>
        <SaveSearchModal className="light-green-hover col-span-1 mx-auto w-full" />
      </div>
    </div>
  );
};

export default InputWithSavedSearch;
