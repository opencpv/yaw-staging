"use client";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { styled } from "@stitches/react";
import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextFieldInputProps = {
  name: string;
  onChange?: (value: any) => void;
  label?: string;
  prefix?: string;
  required?: boolean;
  classNames?: {
    input?: string;
  };
};

const TextFieldInput: React.FC<
  TextFieldInputProps & InputHTMLAttributes<HTMLInputElement>
> = ({ label, name, onChange, required, prefix, classNames, ...props }) => {
  return (
    <div
      className={`flex w-full flex-col gap-[0.9375rem] font-[400] capitalize text-[#6A6968]`}
    >
      {label && (
        <label className="normal-case">
          {label}{" "}
          {required && (
            <span className="relative left-[-4px] top-[-5px] text-xs">*</span>
          )}
        </label>
      )}
      <Field name={name}>
        {({ field, name, form: { touched, errors }, meta }: any) => (
          <div className="relative">
            {prefix && (
              <span className="absolute left-[15px] top-[17px] text-sm">
                {prefix}
              </span>
            )}
            {name}
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
                classNames?.input,
              )}
              {...props}
            />
          </div>
        )}
      </Field>

      <ErrorMessage
        className={`text-[13px] text-error-100`}
        name={name}
        component="p"
      />
    </div>
  );
};

export default TextFieldInput;
