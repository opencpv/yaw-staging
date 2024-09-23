import * as React from "react";

import { cn } from "@/lib/utils";
import { FieldInputProps, useFormikContext } from "formik";
import ErrorMessage from "../states/error-message";
import { Tooltip } from "../tooltip";
import { BsInfoCircle } from "react-icons/bs";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  prefix?: string;
  tooltip?: string;
  classNames?: {
    base?: string;
  };
}

/**
 * Displays a form input field or a component that looks like an input field. <br />
 * Name is required if used in a Formik context.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      classNames,
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
      <label
        className={cn("flex flex-col gap-4 text-shade-300", classNames?.base)}
      >
        {label && (
          <Label required={required} tooltip={tooltip} className="capitalize">
            {label}
          </Label>
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
