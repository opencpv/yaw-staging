"use client";
// import TextInput from "@/components/__shared/ui/form/TextInput";
import React, { useState } from "react";
import { handleCustomerIdSubmit } from "../actions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/__shared/ui/button";

const UniqueIdForm = () => {
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await handleCustomerIdSubmit(formData);
    const message = result?.message || "";
    setLoading(false);
    setMessage(message);
  };

  return (
    <form
      className="relative top-[-40px] mx-auto flex h-[250px] max-w-[495px] items-center justify-center rounded-xl bg-white px-6 py-8 lg:top-[-90px] lg:w-full"
      // action={handleCustomerIdSubmit}
      onSubmit={handleSubmit}
    >
      <div className="flex w-full flex-col gap-3">
        {/* <TextInput
          name="customer-id"
          label="Enter customer ID no."
          required
          classNames={{
            innerWrapper: "border-shade-200 h-[52px]",
            label: "text-lg group-data-[filled-within=true]:pb-2",
          }}
          asterisk={false}
        /> */}
        <p className={cn("mb-5 text-error", { hidden: !message })}>{message}</p>
        <Button type="submit" size="full" isLoading={loading}>
          Proceed
        </Button>
      </div>
    </form>
  );
};

export default UniqueIdForm;
