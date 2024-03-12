"use client";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { openSans } from "../../styles/font";
import { styled } from "@stitches/react";
import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextFieldInputProps = {
  name: string;
  onChange?: (value: any) => void;
  label?: string;
  prefix?: string;
};

const TextFieldInput: React.FC<
  TextFieldInputProps & InputHTMLAttributes<HTMLInputElement>
> = ({ label, name, onChange, prefix, ...props }) => {
  return (
    <div
      className={`flex w-full flex-col gap-[0.9375rem] font-[400] capitalize text-[#6A6968]`}
    >
      {label && <label className="normal-case">{label}</label>}
      <Field name={name}>
        {({ field, form: { touched, errors }, meta }: any) => (
          <div className="relative">
            {prefix && (
              <span className="absolute left-[15px] top-[17px] text-sm">
                {prefix}
              </span>
            )}
            <input
              {...field}
              onChange={(e) => {
                field.onChange(e);
                onChange && onChange(e);
              }}
              className={cn(
                "form-input form-field-border h-[52px] w-full rounded-[4px] px-4 text-[0.8125rem] focus:outline-accent-50",
                {
                  "pl-16": prefix,
                },
              )}
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
        className={`text-error-100 text-[13px]`}
        name={name}
        component="p"
      />
    </div>
  );
};

export default TextFieldInput;
