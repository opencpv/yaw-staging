import React from "react";
import { useContactForm } from "./hooks/useContactForm";
import { Textarea } from "@/components/__shared/ui/form/textarea";

const ContactMessageField = () => {
  const { handleSessionChange } = useContactForm();

  return (
    <div className="form-div">
      <Textarea
        name="message"
        placeholder={"Message"}
        onChange={(e) => {
          handleSessionChange("message", e.target.value);
        }}
      />
    </div>
  );
};

export default ContactMessageField;

//<textarea
//        id="message"
//        name="message"
//        value={contactFormSession.message || props.value}
//        placeholder={props.placeholder ? props.placeholder + " *" : "Message *"}
//        className={cn(
//          `${
//style.requiredPlaceholder
//} form-field-border w-full rounded-md border p-4 shadow-sm outline-none transition-all hover:border-black/50 focus:border-2 focus:border-accent-50 focus:outline-none ${
//props.error && "border-neutral-500"
//}`,
//          props.className,
//        )}
//        rows={8}
//        cols={50}
//        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
//          props.onChange?.(e);
//          handleSessionChange("message", e.target.value);
//        }}
//        onBlur={props.onBlur}
//      ></textarea>
