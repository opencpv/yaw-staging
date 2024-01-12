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
      className={`font-[400] text-[#6A6968] capitalize w-full flex flex-col gap-[0.9375rem]`}>
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
              className="form-input w-full h-[52px] px-4 text-[0.8125rem] border-[1px] border-[#E6E6E6]
              rounded-[4px]"
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
        className={`text-[#851e1e] font-[400] text-[13px] ${openSans.className}`}
        name={name}
        component="p"
      />
    </div>
  );
};


export default TextFieldInput;
