"use client";
import React from "react";
import Button from "./button/Button";

type Props = {};

const SubscribeForm = (props: Props) => {
  return (
    <form
      className="flex h-[95px] w-full max-w-[1061px] flex-col gap-5 rounded-[32px] md:flex-row md:gap-0 
        "
    >
      <input
        className="h-full min-h-[70px] w-full
            rounded-[4rem]
            bg-[#D9D9D9] px-10
            text-xl text-neutral-800 placeholder:text-xl
            xs:text-2xl xs:placeholder:text-2xl md:min-h-[95px] md:rounded-r-[0px] lg:w-3/5"
        placeholder={"Email or phone number"}
      />
      <Button
        color="accent"
        radius="full"
        className="min-h-[70px] w-full max-w-full rounded-[4rem] text-2xl font-semibold uppercase md:min-h-[95px] md:rounded-l-[0px] lg:w-2/5"
      >
        subscribe now!
      </Button>
    </form>
  );
};

export default SubscribeForm;
