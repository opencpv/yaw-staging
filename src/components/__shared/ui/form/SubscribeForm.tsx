"use client";
import React from "react";
import { Button } from "../button";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

/**
 * A component that allows the user to subscribe to our newsletter.
 */
const SubscribeForm = ({ onSubmit }: Props) => {
  return (
    <form
      className="grid h-[95px] w-full max-md:gap-5 md:grid-cols-8"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <input
        className="h-full min-h-[70px] w-full rounded-full bg-shade-50 px-10 text-xl text-neutral-800 focus-visible:outline-accent xs:text-2xl md:col-span-5 md:rounded-r-none"
        placeholder="Email or WhatsApp"
        required
      />
      <Button
        variant="accent"
        size="lg"
        className="h-full min-h-[70px] rounded-full text-2xl font-semibold uppercase max-md:w-full md:col-span-3 md:rounded-l-none"
        type="submit"
      >
        subscribe now!
      </Button>
    </form>
  );
};

export default SubscribeForm;
