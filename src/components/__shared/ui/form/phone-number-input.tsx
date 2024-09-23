"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import { E164Number, CountryCode } from "libphonenumber-js/core";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useFormikContext,
} from "formik";
import ErrorMessage from "../states/error-message";
import { cn } from "@/lib/utils";
import { Label } from "./label";

type Props = {
  name: string;
  value?: E164Number | undefined;
  onCountryChange: (country: CountryCode | undefined) => void;
  onChange?: (value: E164Number | undefined) => void;
  id?: string;
  placeholder?: string;
  onBlur?: (e: any) => void;
  className?: string;
  showError?: boolean;
  required?: boolean;
};

/**
 * A component that allows the user to input a phone number with a country code and flag. <br />
 * Name is required if used in a Formik context.
 */
const PhoneNumberInput: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({
  value,
  name,
  id,
  onChange,
  onBlur,
  onCountryChange,
  placeholder,
  className,
  required,
  showError = true,
  ...props
}) => {
  const [country] = useState<CountryCode>("GH");
  const [showCode, setShowCode] = useState<boolean>(false);

  const formikContext = useFormikContext();
  let field: FieldInputProps<any> | undefined;
  let meta: FieldMetaProps<any> | undefined;
  let helpers: FieldHelperProps<any> | undefined;

  if (formikContext) {
    field = formikContext.getFieldProps(name as string);
    meta = formikContext.getFieldMeta(name as string);
    helpers = formikContext.getFieldHelpers(name as string);
  }

  const handleFocus = (e: any) => {
    setShowCode(true);
    setShowCode(true);
    setShowCode(true); // intentionally called thrice as once doesn't work as intended
  };

  return (
    <label className="w-full space-y-4 text-sm">
      {props.label && (
        <Label required={required} className="capitalize">
          {props.label}
        </Label>
      )}
      <PhoneInput
        id={id}
        name={field?.name || name}
        value={field?.value || value}
        onChange={(value) => {
          onChange?.(value);
          helpers?.setValue(value);
        }}
        defaultCountry={country}
        international={showCode}
        countryCallingCodeEditable={false}
        onCountryChange={onCountryChange}
        placeholder={placeholder || "Enter phone number"}
        onFocus={handleFocus}
        onBlur={onBlur}
        className={cn("text-base", className)}
      />
      {showError && (
        <>
          {formikContext ? <ErrorMessage name={field?.name as string} /> : null}
        </>
      )}
    </label>
  );
};

export default PhoneNumberInput;
