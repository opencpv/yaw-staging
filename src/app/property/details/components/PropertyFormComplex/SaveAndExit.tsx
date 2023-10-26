import { styled } from "@stitches/react";

import React from "react";

function SaveIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24">
      <g clipPath="url(#clip0_5254_63084)">
        <path
          fill="#DDB771"
          d="M17.5 3h-12a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16h-14V5h11.17l2.83 2.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-6-6h9v4h-9V6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_5254_63084">
          <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.5)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SaveIcon;

export const SaveAndExit = () => {
  return (
    // <div className="flex gap-8 items-center ">
    //   <div className="flex gap-3 text-[#8A8A8A]">
    //     <SaveIcon />
    //     Saved
    //   </div>{" "}
      <Root
        className="w-[115px] h-[35px]  flex items-center justify-center  rounded-[16px]
          hover:scale-[1.05] hover:bg-gray-100
       
          text-[13px] font-[600] text-[#8A8A8A]">
        Save & Exit
      </Root>
    // </div>
  );
};

const Root = styled("button", {
  boxShadow:
    "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
});
