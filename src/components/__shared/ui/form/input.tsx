import * as React from "react";

import { cn } from "@/lib/utils";
import { FieldInputProps, useFormikContext } from "formik";
import ErrorMessage from "../states/error-message";
import { Tooltip } from "../tooltip/tooltip";
import { BsInfoCircle } from "react-icons/bs";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  prefix?: string;
  tooltip?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      prefix,
      name,
      value,
      onChange,
      required,
      tooltip,
      ...props
    },
    ref,
  ) => {
    const formikContext = useFormikContext();
    let field: FieldInputProps<any> | undefined;

    if (formikContext) {
      field = formikContext.getFieldProps(name as string);
    }

    return (
      <label className="flex flex-col gap-4 text-shade-300">
        {label && (
          <div className="flex gap-x-1.5">
            <h5 className="font-normal capitalize">{label}</h5>
            {required && (
              <span className="relative text-sm text-shade-300">*</span>
            )}
            {tooltip && (
              <Tooltip content={tooltip}>
                <BsInfoCircle className="text-accent" size={20} />
              </Tooltip>
            )}
          </div>
        )}
        <small className="relative">
          {prefix && (
            <span className="absolute left-[15px] top-[17px]">{prefix}</span>
          )}
          <input
            name={field?.name || name}
            value={field?.value || value}
            type={type}
            className={cn(
              "form-field-border flex h-[52px] w-full rounded-md bg-white px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50",
              {
                "pl-16": prefix,
              },
              className,
            )}
            onChange={(e) => {
              field?.onChange(e);
              onChange?.(e);
            }}
            onBlur={(e) => {
              field?.onBlur(e);
              props.onBlur?.(e);
            }}
            required={required}
            ref={ref}
            {...props}
          />
        </small>
        {formikContext ? <ErrorMessage name={field?.name as string} /> : null}
      </label>
    );
  },
);
Input.displayName = "Input";

export { Input };
