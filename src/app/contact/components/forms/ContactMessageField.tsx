import { Field } from "formik";
import React from "react";
import style from "./ContactForm.module.css"

type Props = {};

const ContactMessageField = (props: Props) => {
  return (
    <div className="form-div">
      <Field
        as="textarea" // Use 'textarea' as the component
        id="message"
        name="message"
        placeholder="Message *"
        className={`${style.requiredPlaceholder} p-4 max-w-[673px] border shadow-sm rounded-md outline-none transition-all focus:border-black hover:border-black/50 `}
        rows="8"
        cols="50"
      />
    </div>
  );
};

export default ContactMessageField;
