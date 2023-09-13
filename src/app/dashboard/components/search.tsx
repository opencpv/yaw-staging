"use client"

import { styled } from "@stitches/react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <Root className="flex items-center xl:min-w-[620px]">
      <div className="hidden md:flex w-full relative">
      <AiOutlineSearch size="16" color="#737373" className='icon'/>

        <input
          type="search"
          className="p-[0.9375rem] px-9
                w-full rounded-[4px]"
          placeholder="Search"
        />
      </div>
      <div className="md:hidden ">
        <button>
          <AiOutlineSearch size="20" color="white"/>
        </button>
      </div>
    </Root>
  );
};

const Root = styled('div', {
    maxWidth:"620px",
    width:"100%",
    maxHeight:"52px",
    aspectRatio:"620/52",
    borderRadius:"4px",
    "@media screen and (max-width:728px)":{
        maxWidth:"279px",
    },
    "& .icon":{
        position:"absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left:"0.9375rem",
        
    }
})

export default Search;
