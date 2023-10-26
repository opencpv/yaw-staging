"use client";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { openSans } from "../styles/font";
import { styled } from "@stitches/react";

type TextFieldInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (value: any) => void;
};

const TextFieldInput = ({
  label,
  type,
  name,
  placeholder,
  onChange,
}: TextFieldInputProps) => {
  return (
    <TFormDiv
      className={`font-[400] ${openSans.className} text-[#6A6968] capitalize w-full`}
    >
      <label className="text-[16px]">{label}</label>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }: any) => (
          <div>
            <input
              type={type}
              placeholder={placeholder}
              {...field}
              onChange={(e) => {
                field.onChange(e);
                onChange(e);
              }}
              className="form-input w-full"
            />
          </div>
        )}
      </Field>
      <ErrorMessage
        className={`text-[#B4B2AF] font-[400] text-[13px] ${openSans.className}`}
        name={name}
        component="p"
      />
    </TFormDiv>
  );
};
const TFormDiv = styled("div", {
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  ".form-input": {
    height: "52px",
    padding: "15px",
    fontSize: " 0.8125rem",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
  },
});

export default TextFieldInput;