import { Field } from "formik";
import React from "react";
import style from "./ContactForm.module.css"
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  placeholder?: string;
  error?: string;
};

const ContactMessageField = (props: Props) => {
  return (
    <div className="form-div">
      <Field
        as="textarea" // Use 'textarea' as the component
        id="message"
        name="message"
        placeholder={props.placeholder + " *" ?? "Message *"}
        className={cn(`${style.requiredPlaceholder} p-4 border shadow-sm rounded-md outline-none transition-all focus:border-black hover:border-black/50 ${props.error && "border-neutral-900"}`, props.className)}
        rows="8"
        cols="50"
      />
    </div>
  );
};

export default ContactMessageField;
