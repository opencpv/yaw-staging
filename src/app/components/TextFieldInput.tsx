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
      className={`font-[400] ${openSans.className} text-[#6A6968] capitalize w-full`}>
      <label className="text-[16px]">{label}</label>
      <Field name={name}>
        {({
          field, 
          form: { touched, errors }, 
          meta,
        } : any) => (
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
        
        {errors[name] && <p className="mt-3 text-[#851e1e] font-[400] text-[13px]" >{errors[name]}</p>}
          </div>
        )}
      </Field>
  
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
