"use client";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { openSans } from "../../styles/font";
import { styled } from "@stitches/react";
import { InputHTMLAttributes } from "react";

type TextFieldInputProps = {
  name: string;
  onChange: (value: any) => void;
  label?: string;
};

const TextFieldInput: React.FC<
  TextFieldInputProps & InputHTMLAttributes<HTMLInputElement>
> = ({ label, name, onChange, ...props }) => {
  return (
    <div
      className={`flex w-full flex-col gap-[0.9375rem] font-[400] capitalize text-[#6A6968]`}
    >
      {label && <label className="normal-case">{label}</label>}
      <Field name={name}>
        {({ field, form: { touched, errors }, meta }: any) => (
          <div>
            <input
              {...field}
              onChange={(e) => {
                field.onChange(e);
                onChange(e);
              }}
              className="form-input form-field-border h-[52px] w-full rounded-[4px] px-4
              text-[0.8125rem]"
              {...props}
            />

            {/* {errors[name] && (
              <p className="mt-3 text-[#851e1e] font-[400] text-[13px]">
                {errors[name]}
              </p>
            )} */}
          </div>
        )}
      </Field>

      <ErrorMessage
        className={`text-[13px] font-[400] text-[#851e1e]`}
        name={name}
        component="p"
      />
    </div>
  );
};

export default TextFieldInput;
