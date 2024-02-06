"use client";

import { styled } from "@stitches/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiSaveAs } from "react-icons/hi";

const Search = () => {
  const [showDivider, setShowDivider] = React.useState(false);

  return (
    <Root className="relative flex h-[42px] max-h-[52px] w-full max-w-lg items-center pr-2 md:bg-[#F9F9F9] xl:min-w-[420px] 2xl:aspect-[620/52] 2xl:h-[52px]">
      <div className="relative hidden h-full w-full grid-cols-12 items-center md:grid">
        <input
          type="search"
          className="col-span-10 rounded-[4px] border-0 bg-transparent px-4 py-1 outline-0"
          placeholder="Search"
          onInput={(e) =>
            e.currentTarget.value !== ""
              ? setShowDivider(true)
              : setShowDivider(false)
          }
        />
        <button className="col-span-1 mx-auto" title="Search">
          <AiOutlineSearch size="16" color="#737373" />
        </button>
        <HiSaveAs
          className="cursor-pointer text-[#21A19F]"
          title="saved search"
          size={20}
        />
      </div>
      <div
        className="absolute right-[18%] top-2 hidden h-[60%] w-[1px] bg-shade-50 md:block"
        style={{ display: showDivider ? "block" : "none" }}
      ></div>

      {/* search for mobile */}
      <div className="flex h-full items-center md:hidden">
        <button>
          <AiOutlineSearch size="20" color="white" />
        </button>
      </div>
    </Root>
  );
};

const Root = styled("form", {
  borderRadius: "4px",

  "& .icon": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "0.9375rem",
  },
});

export default Search;
