"use client";
import TextInput from "@/components/__shared/form/TextInput";
import React, {
  ChangeEvent,
  FocusEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useContactForm } from "./hooks/useContactForm";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import { E164Number, CountryCode } from "libphonenumber-js/core";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

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
  return (
    <InputPhoneNumber
      id="phone"
      name="phone"
      value={phone}
      placeholder="WhatsApp"
      onBlur={handleBlur}
      onChange={handlePhone}
      onInput={handleChange}
      onCountryChange={handleCountryChange}
    />
  );
};

export default ContactPhoneField;
