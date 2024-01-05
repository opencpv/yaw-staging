"use client";

import { styled } from "@stitches/react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <Root className="flex items-center  xl:min-w-[420px] lg:max-w-[620px] w-full max-w-[279px] h-[42px] 2xl:h-[52px] max-h-[52px] 2xl:aspefct-[620/52]">
      <div className="hidden md:flex w-full relative items-center h-full">
        <AiOutlineSearch size="16" color="#737373" className="icon" />

        <input
          type="search"
          className=" px-9 h-full
                w-full rounded-[4px]"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center md:hidden h-full">
        <button>
          <AiOutlineSearch size="20" color="white" />
        </button>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  borderRadius: "4px",

  "& .icon": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "0.9375rem",
  },
});

export default Search;
