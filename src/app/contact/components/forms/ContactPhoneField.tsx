"use client";
import React, { useState } from "react";
import { useContactForm } from "./hooks/useContactForm";
import { CountryCode } from "libphonenumber-js/core";
import PreferredContactMethod from "./PreferredContactMethod";

type ContactMethod = "Email" | "WhatsApp";

type Props = {
  handleCountryChange: (country: CountryCode | undefined) => void;
};

const ContactPhoneField = ({ handleCountryChange }: Props) => {
  const [preferredContact] = useState<ContactMethod>("Email");

  return (
    <PreferredContactMethod
      placeholder="WhatsApp"
      //selectedKey={
      //  (contactFormSession.preferredContactMethod as ContactMethod) ||
      //  preferredContact
      //}
      handleCountryChange={handleCountryChange}
    />
  );
};

export default ContactPhoneField;
