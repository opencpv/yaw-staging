"use client";
import TextInput from "@/components/__shared/form/TextInput";
import React, {
  ChangeEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
} from "react";
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

const ContactEmailField = ({
  value,
  handleChange,
  error,
}: Props) => {
  const EmailInputRef = useRef<HTMLInputElement>(null);
  const { errorClassName } = useContactForm();
  const [fullNameError, setFullNameError] = useState<string | undefined>(
    undefined,
  );

  console.log(fullNameError);
  console.log(error);

  useEffect(() => {
    setFullNameError(error);
    if (fullNameError === "" || fullNameError === undefined) {
      HTMLElement.prototype.scrollIntoView = function () {};
    }
    if (fullNameError !== "") {
      if (EmailInputRef.current) {
        EmailInputRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    }
  }, [fullNameError, error]);

  return (
    <TextInput
      name="email"
      value={value}
      label="Email"
      required
      onChange={handleChange}
      className={`p-3 py-7 ${fullNameError && `${errorClassName}`}`}
      ref={EmailInputRef}
    />
  );
};

export default ContactEmailField;
