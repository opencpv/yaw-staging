"use client";
import TextInput from "@/components/__shared/form/TextInput";
import React, { ChangeEvent } from "react";
import { useContactForm } from "./hooks/useContactForm";

type Props = {
  value: string | null;
  handleChange?: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(
      field: T,
    ): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  error?: string;
};

const ContactEmailField = ({ value, handleChange, error }: Props) => {
  const { errorClassName } = useContactForm();

  return (
    <TextInput
      name="email"
      value={value}
      label="Email"
      required
      onChange={handleChange}
      className={`p-3 py-7 ${error && `${errorClassName}`}`}
    />
  );
};

export default ContactEmailField;
