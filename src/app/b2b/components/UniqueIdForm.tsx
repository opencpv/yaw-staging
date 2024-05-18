import TextInput from "@/components/__shared/ui/form/TextInput";
import React from "react";
import { handleCustomerIdSubmit } from "../actions";
import ContinueButton from "./ContinueButton";

const UniqueIdForm = () => {
  return (
    <form
      className="relative top-[-40px] mx-auto flex h-[250px] max-w-[495px] items-center justify-center rounded-xl bg-white px-6 py-8 lg:top-[-90px] lg:w-full"
      action={handleCustomerIdSubmit}
    >
      <div className="flex w-full flex-col gap-3">
        <TextInput
          name="customer-id"
          label="Enter unique id no."
          required
          classNames={{
            innerWrapper: "border-shade-200 h-[52px]",
            label: "text-lg",
          }}
          asterisk={false}
        />
        <ContinueButton />
      </div>
    </form>
  );
};

export default UniqueIdForm;
