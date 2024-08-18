"use client";
import TextInput from "@/components/__shared/ui/form/TextInput";
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
  return (
    <TextInput
      name="email"
      type="email"
      value={value}
      label="Email"
      onChange={handleChange}
      className={`p-3 py-7`}
    />
  );
};

export default ContactEmailField;
