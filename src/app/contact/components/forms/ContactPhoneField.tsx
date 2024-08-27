"use client";
import React, { ChangeEvent, FocusEvent, useState } from "react";
import { useContactForm } from "./hooks/useContactForm";
import { E164Number, CountryCode } from "libphonenumber-js/core";
import PreferredContactMethod from "./PreferredContactMethod";

type ContactMethod = "Email" | "WhatsApp";

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
  onSelectionChange?: (key: ContactMethod) => void;
};

const ContactPhoneField = ({
  phone,
  handleChange,
  handlePhone,
  handleCountryChange,
  handleBlur,
  onSelectionChange,
}: Props) => {
  const { contactFormSession, handleSessionChange } = useContactForm();
  const [preferredContact, setPreferredContact] =
    useState<ContactMethod>("Email");

  return (
    <PreferredContactMethod
      value={contactFormSession.phone || (phone as E164Number)}
      emailValue={contactFormSession.email}
      placeholder="WhatsApp"
      selectedKey={
        (contactFormSession.preferredContact as typeof preferredContact) ||
        preferredContact
      }
      onBlur={handleBlur}
      // onChangePhone={(value) => {
      //   handlePhone(value);
      //   handleSessionChange("phone", value as E164Number);
      // }}
      onChangeEmail={(e) => {
        handleChange?.(e);
        handleSessionChange("email", e.target.value);
      }}
      onChange={(value) => {
        handlePhone(value);
        handleSessionChange("phone", value as E164Number);
      }}
      handleCountryChange={handleCountryChange}
      onSelectionChange={(key) => {
        setPreferredContact(key);
        onSelectionChange?.(key);
        handleSessionChange("preferredContact", key);
      }}
    />
  );
};

export default ContactPhoneField;
