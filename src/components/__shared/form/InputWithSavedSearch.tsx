"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SaveSearchModal from "../modals/SaveSearchModal";
import Button from "../ui/button/Button";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  inputClassName?: string;
  searchIconColor?: string;
  separatorClassName?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

const InputWithSavedSearch = ({
  className,
  inputClassName,
  searchIconColor,
  separatorClassName,
  onSubmit,
}: Props) => {
  const [showDivider, setShowDivider] = React.useState(false);
  const pathname = usePathname();

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
        <Button
          href={pathname === "/properties" ? undefined : "/properties?sk=true"}
          type="submit"
          isIconOnly
          className="col-span-1 mx-auto mr-2 xs:mr-auto"
          title="search"
        >
          <AiOutlineSearch
            size="16"
            color={searchIconColor ?? "#737373"}
            className="mx-auto"
          />
        </Button>
        {/* !!! COMMENTED OUT FOR NOW */}
        {/* <div className="deep-green-hover col-span-1 grid h-full w-full place-items-center">
          <SaveSearchModal className="mx-auto" />
        </div> */}
      </form>
    </div>
  );
};

export default InputWithSavedSearch;
