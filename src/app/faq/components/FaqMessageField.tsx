import React, { HTMLAttributes } from "react";
import style from "@/app/contact/ContactForm.module.css";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  placeholder?: string;
  error?: string;
};

const FaqMessageField: React.FC<Props & HTMLAttributes<HTMLTextAreaElement>> = (
  props,
) => {
  return (
    <div className="form-div">
      <textarea
        id="message"
        name="message"
        value={props.value}
        placeholder={props.placeholder ? props.placeholder + " *" : "Message *"}
        className={cn(
          `${
            style.requiredPlaceholder
          } form-field-border w-full rounded-md border p-4 text-base shadow-sm outline-none transition-all hover:border-black/50 focus:border-2 focus:border-accent-50 focus:outline-none ${
            props.error && "border-neutral-500"
          }`,
          props.className,
        )}
        rows={8}
        cols={50}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          props.onChange?.(e);
        }}
        onBlur={props.onBlur}
      ></textarea>
    </div>
  );
};

export default FaqMessageField;
