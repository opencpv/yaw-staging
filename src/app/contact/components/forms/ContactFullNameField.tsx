"use client";
import TextInput from "@/components/__shared/ui/form/TextInput";
import React, { ChangeEvent, FocusEvent, useEffect, useRef } from "react";

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
  const fullNameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error) {
      if (fullNameInputRef.current) {
        fullNameInputRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    }
  }, [error]);

  return (
    <TextInput
      name="fullname"
      value={value}
      label="Full Name"
      required
      onChange={handleChange}
      onBlur={handleBlur}
      className={`p-3 py-7`}
      ref={fullNameInputRef}
    />
  );
};

export default ContactFullNameField;
