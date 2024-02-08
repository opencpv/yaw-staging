"use client";

import SaveSearchModal from "@/components/__shared/modals/SaveSearchModal";
import { cn } from "@/lib/utils";
import { styled } from "@stitches/react";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiSaveAs } from "react-icons/hi";

const Search = ({ className }: { className?: string }) => {
  const [showDivider, setShowDivider] = React.useState(false);

  return (
    <div
      className={cn(
        "relative flex h-[52px] max-h-[52px] w-full max-w-lg items-center rounded-[4px] bg-[#F9F9F9] pr-2 md:h-[42px] xl:min-w-[420px] 2xl:aspect-[620/52] 2xl:h-[52px]",
        className,
      )}
    >
      <div className="relative grid h-full w-full grid-cols-12 items-center">
        <input
          type="search"
          className="col-span-10 rounded-[4px] border-0 bg-transparent px-4 py-1 text-neutral-800 outline-0"
          placeholder="Madina, Accra"
          onInput={(e) =>
            e.currentTarget.value !== ""
              ? setShowDivider(true)
              : setShowDivider(false)
          }
        />
        <Link
          href="/properties"
          className="col-span-1 mx-auto mr-2 xs:mr-auto"
          title="search"
        >
          <AiOutlineSearch size="16" color="#737373" />
        </Link>
        <SaveSearchModal />
      </div>
      <div
        className="absolute right-[20.5%] top-2 hidden h-[60%] w-[1px] bg-shade-50 xs:right-[19%] md:right-[18%] md:block"
        style={{ display: showDivider ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default Search;
