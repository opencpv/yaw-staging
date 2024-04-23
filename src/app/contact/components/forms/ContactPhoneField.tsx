"use client";
import TextInput from "@/components/__shared/ui/form/TextInput";
import React, {
  ChangeEvent,
  FocusEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useContactForm } from "./hooks/useContactForm";
import InputPhoneNumber from "@/components/__shared/ui/form/InputPhoneNumber";
import { E164Number, CountryCode } from "libphonenumber-js/core";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import PreferredContactMethod from "@/components/__shared/ui/form/PreferredContactMethod";

type Props = {
  phone?: E164Number;
  handleChange?: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(
      field: T,
    ): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };

  handlePhone: (value: any) => void;
  handleCountryChange: (country: CountryCode | undefined) => void;
};

const ContactPhoneField = ({
  phone,
  handleChange,
  handlePhone,
  handleCountryChange,
  handleBlur,
}: Props) => {
  const [preferredContact, setPreferredContact] = useState<
    "email" | "whatsapp"
  >("email");

  return (
    <PreferredContactMethod
      value={phone as E164Number}
      placeholder="WhatsApp"
      selectedKey={preferredContact}
      onBlur={handleBlur}
      onChangePhone={handlePhone}
      onChange={handlePhone}
      handleCountryChange={handleCountryChange}
      onSelectionChange={setPreferredContact}
    />
  );
};

export default ContactPhoneField;
