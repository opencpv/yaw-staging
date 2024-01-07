"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, { ElementType, useState } from "react";
import { E164Number, CountryCode } from "libphonenumber-js/core";

type Props = {
  name?: string;
  inputComponent?: ElementType<any>;
  placeholder?: string;
};

const InputPhoneNumber = ({ inputComponent, placeholder }: Props) => {
  const [value, setValue] = useState<E164Number>();

  const [country, setCountry] = useState<CountryCode>("GH");

  const handleCountryChange = (country: CountryCode) => {
    setCountry(country);
  };

  return (
    <PhoneInput
      value={value}
      onChange={setValue}
      defaultCountry={country}
      international
      countryCallingCodeEditable={false}
      inputComponent={inputComponent}
      onCountryChange={handleCountryChange}
      placeholder={placeholder}
    />
  );
};

export default InputPhoneNumber;
