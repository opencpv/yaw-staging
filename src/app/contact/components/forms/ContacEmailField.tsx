"use client";
import { Input } from "@/components/__shared/ui/form/input";
import React, { ChangeEvent } from "react";

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
    <Input
      name="email"
      type="email"
      value={value as string}
      label="Email"
      onChange={handleChange}
      className={`p-3 py-7`}
    />
  );
};

export default ContactEmailField;
