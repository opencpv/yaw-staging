"use client";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import React, { ChangeEvent, FocusEvent, useEffect, useRef } from "react";
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
  handleBlur?: {
    (e: FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error?: string;
};

const ContactFullNameField = ({
  value,
  handleChange,
  handleBlur,
  error,
}: Props) => {
  const { contactFormSession, handleSessionChange } = useContactForm();

  return (
    <TextFieldInput
      name="fullname"
      value={contactFormSession.fullname || (value as string)}
      placeholder="Full Name"
      required
      onChange={(e) => {
        handleChange?.(e);
        handleSessionChange("fullname", e.target.value);
      }}
      onBlur={handleBlur}
    />
  );
};

export default ContactFullNameField;
