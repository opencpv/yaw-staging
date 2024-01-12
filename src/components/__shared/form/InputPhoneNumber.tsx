"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, {
  useState,
} from "react";
import { E164Number, CountryCode } from "libphonenumber-js/core";

type Props = {
  id: string;
  name: string;
  value: E164Number | undefined;
  onCountryChange: (country: CountryCode | undefined) => void;
  onChange: (value: E164Number | undefined) => void;
  placeholder?: string;
  onBlur: (e: any) => void;
};

const InputPhoneNumber: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({
  value,
  name,
  id,
  onChange,
  onBlur,
  onCountryChange,
  placeholder,
}) => {

  const [country] = useState<CountryCode>("GH");
  const [showCode, setShowCode] = useState<boolean>(false)

  // document.querySelector(".PhoneInput")?.addEventListener("focus", () => {
  //     console.log("FOCUS")
  // })

  const handleFocus = (e: any) => {
      setShowCode(true)
      setShowCode(true)
      setShowCode(true) // intentionally called thrice as once doesn't work as intended
  }

  return (
    <PhoneInput
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      defaultCountry={country}
      international={showCode}
      countryCallingCodeEditable={false}
      onCountryChange={onCountryChange}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={onBlur}
    />
  );
};

export default InputPhoneNumber;
