"use client";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { openSans } from "../../styles/font";
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
    <div
      className={`flex w-full flex-col gap-[0.9375rem] font-[400] capitalize text-[#6A6968]`}
    >
      <label className="text-[16px]">{label}</label>
      <Field name={name}>
        {({ field, form: { touched, errors }, meta }: any) => (
          <div>
            <input
              type={type}
              placeholder={placeholder}
              {...field}
              onChange={(e) => {
                field.onChange(e);
                onChange(e);
              }}
              className="form-input h-[52px] w-full rounded-[4px] border-[1px] border-[#E6E6E6] px-4
              text-[0.8125rem]"
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
