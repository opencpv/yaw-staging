import { Field } from "formik";
import React from "react";
import style from "./ContactForm.module.css";
import { cn } from "@/lib/utils";
import { useContactForm } from "./hooks/useContactForm";

type Props = {
  className?: string;
  placeholder?: string;
  error?: string;
};

const ContactMessageField = (props: Props) => {
  const { errorClassName } = useContactForm();

  return (
    <div className="form-div">
      <Field
        as="textarea" // Use 'textarea' as the component
        id="message"
        name="message"
        placeholder={props.placeholder + " *" ?? "Message *"}
        className={cn(
          `${
            style.requiredPlaceholder
          } rounded-md border p-4 shadow-sm outline-none transition-all hover:border-black/50 focus:border-black ${
            props.error && errorClassName
          }`,
          props.className,
        )}
        rows="8"
        cols="50"
      />
    </div>
  );
};

export default ContactMessageField;
