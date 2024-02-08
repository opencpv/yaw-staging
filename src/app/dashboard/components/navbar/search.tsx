"use client";

import { styled } from "@stitches/react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <Root className="flex h-[42px] max-h-[52px] w-full max-w-lg items-center xl:min-w-[420px] 2xl:aspect-[620/52] 2xl:h-[52px]">
      <div className="relative hidden h-full w-full items-center md:flex">
        <AiOutlineSearch size="16" color="#737373" className="icon" />

        <input
          type="search"
          className=" h-full w-full
                rounded-[4px] bg-[#F9F9F9] px-9"
          placeholder="Search"
        />
      </div>
      <div className="flex h-full items-center md:hidden">
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
