"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, {
  useState,
} from "react";
import { E164Number, CountryCode } from "libphonenumber-js/core";

type Props = {
  value: E164Number | undefined;
  onCountryChange: (country: CountryCode | undefined) => void;
  onChange: (value: E164Number | undefined) => void;
};

const InputPhoneNumber: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({
  value,
  onChange,
  onCountryChange,
}) => {
  // const [value, setValue] = useState<E164Number>();

  const [country] = useState<CountryCode>("GH");

  // const handleCountryChange = (country: CountryCode) => {
  //   setCountry(country);
  // };

  return (
    <PhoneInput
      value={value}
      onChange={onChange}
      defaultCountry={country}
      international
      countryCallingCodeEditable={false}
      onCountryChange={onCountryChange}
    />
  );
};

export default InputPhoneNumber;
