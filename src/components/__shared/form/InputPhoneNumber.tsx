"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import { E164Number, CountryCode } from "libphonenumber-js/core";
import { useField } from "formik";

type Props = {
  name: string;
  value: E164Number | undefined;
  onCountryChange: (country: CountryCode | undefined) => void;
  onChange: (value: E164Number | undefined) => void;
  id?: string;
  placeholder?: string;
  onBlur?: (e: any) => void;
};

const InputPhoneNumber: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({
  value,
  name,
  id,
  onChange,
  onBlur,
  onCountryChange,
  placeholder,
  ...props
}) => {
  const [country] = useState<CountryCode>("GH");
  const [showCode, setShowCode] = useState<boolean>(false);

  const [field, meta, helpers] = useField(name as string);

  // document.querySelector(".PhoneInput")?.addEventListener("focus", () => {
  //     console.log("FOCUS")
  // })

  const handleFocus = (e: any) => {
    setShowCode(true);
    setShowCode(true);
    setShowCode(true); // intentionally called thrice as once doesn't work as intended
  };

  return (
    <div className="space-y-4">
      {props.label && <label className="text-shade-300">{props.label}</label>}
      <PhoneInput
        id={id}
        name={field.name || name}
        value={field.value || value}
        onChange={(value) => {
          onChange(value);
          helpers.setValue(value);
        }}
        defaultCountry={country}
        international={showCode}
        countryCallingCodeEditable={false}
        onCountryChange={onCountryChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputPhoneNumber;
