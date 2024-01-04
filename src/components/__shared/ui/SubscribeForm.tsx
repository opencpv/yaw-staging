"use client";
import React from "react";

type Props = {};

const SubscribeForm = (props: Props) => {
  return (
    <form
      className="flex flex-col gap-5 md:gap-0 md:flex-row w-full max-w-[1061px] h-[95px] rounded-[32px] 
        "
    >
      <input
        className="h-full rounded-[4rem] px-10
            md:rounded-r-[0px]
            min-h-[70px] md:min-h-[95px]
            w-full lg:w-3/5 bg-[#D9D9D9]
            text-[#B0B0B0] text-2xl"
        placeholder={"Email or phone number"}
      />
      <button
        className="uppercase bg-[#DDB771] min-h-[70px] md:min-h-[95px]
          flex items-center text-white justify-center rounded-[4rem]
          w-full font-semibold text-2xl md:rounded-l-[0px] lg:w-2/5"
      >
        subscribe now!
      </button>
    </form>
  );
};

export default SubscribeForm;
