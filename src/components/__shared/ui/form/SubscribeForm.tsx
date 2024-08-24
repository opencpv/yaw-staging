"use client";
import React from "react";
import { Button } from "../button";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SubscribeForm = ({ onSubmit }: Props) => {
  return (
    <form
      className="flex h-[95px] w-full max-w-[1061px] flex-col gap-5 rounded-[32px] md:flex-row md:gap-0"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <input
        className="h-full min-h-[70px] w-full rounded-[4rem] bg-[#D9D9D9] px-10 text-xl text-neutral-800 placeholder:text-xl focus:outline-accent-50 xs:text-2xl xs:placeholder:text-2xl md:min-h-[95px] md:rounded-r-[0px] lg:w-3/5"
        placeholder="Email or WhatsApp"
        required
      />
      <Button
        variant="accent"
        size="lg"
        radius={"full"}
        className="min-h-[70px] text-2xl font-semibold uppercase max-md:w-full md:min-h-[95px] md:rounded-l-none"
        type="submit"
      >
        subscribe now!
      </Button>
    </form>
  );
};

export default SubscribeForm;
