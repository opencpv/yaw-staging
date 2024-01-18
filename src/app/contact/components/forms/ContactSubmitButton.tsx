import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  label?: string;
};

const ContactSubmitButton = (props: Props) => {
  return (
    <button
      className={cn("bg-[#DDB771] rounded-[8px] w-full h-[52px] flex items-center justify-center text-white mt-5 hover:scale-[1.05] xs:w-[135px]", props.className)}
      type="submit"
    >
      {props.label ?? "Submit"}
    </button>
  );
};

export default ContactSubmitButton;
