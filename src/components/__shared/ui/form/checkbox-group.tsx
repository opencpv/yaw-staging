"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useFormikContext,
} from "formik";
import ErrorMessage from "../states/error-message";
import { Checkbox } from "./checkbox";

type CheckboxGroupProps = {
  name?: string;
  options?: string[];
  color?: "accent" | "primary";
  disabled?: {
    [key: string]: boolean;
  };
  label?: string;
  onValueChange?: (value: string, checked: boolean) => void;
};

/**
 * A set of checkboxes that allows the user to toggle between checked and not checked. <br />
 * Name is required if used in a Formik context.
 */
const CheckboxGroup = React.forwardRef<
  React.LegacyRef<HTMLDivElement>,
  CheckboxGroupProps
>(
  (
    {
      label,
      disabled,
      color = "accent",
      name,
      options,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const [values, setValues] = React.useState<string[]>([]);
    const formikContext = useFormikContext();
    let field: FieldInputProps<any> | undefined;
    let helpers: FieldHelperProps<any> | undefined;
    let meta: FieldMetaProps<any> | undefined;

    if (formikContext) {
      field = formikContext.getFieldProps(name as string);
      helpers = formikContext.getFieldHelpers(name as string);
      meta = formikContext.getFieldMeta(name as string);
    }

    const handleValueChange = (value: string, checked: boolean) => {
      if (!checked) {
        setValues(values.filter((v) => v !== value));
        helpers?.setValue(field?.value.filter((v: string) => v !== value));
      } else {
        setValues([...values, value]);
        helpers?.setValue([...field?.value, value]);
      }
    };

    return (
      <div
        //onValueChange={(value) => {
        //  helpers?.setValue(value);
        //  onValueChange?.(value);
        //}}
        //value={field?.value}
        //name={field?.name}
        className="flex flex-col gap-4 text-shade-300"
        {...props}
        ref={ref as React.LegacyRef<HTMLDivElement>}
      >
        <p className="flex gap-2 whitespace-nowrap text-base">{label}</p>
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          {options?.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                name={field?.name + " " + option || name + " " + option}
                value={option}
                id={option}
                disabled={disabled?.[option] || false}
                color={color}
                checked={field?.value?.includes(option)}
                onCheckedChange={(checked) => {
                  handleValueChange(option, checked as boolean);
                  onValueChange?.(option, checked as boolean);
                }}
              />
              <div
                className={cn("pl-2 text-base leading-none transition-colors", {
                  "opacity-50": disabled?.[option],
                })}
              >
                {option}
              </div>
            </div>
          ))}
        </div>
        {meta?.touched && meta?.error ? (
          <ErrorMessage name={meta.error}>{meta.error}</ErrorMessage>
        ) : null}
      </div>
    );
  },
);
CheckboxGroup.displayName = "RadioInput";

export { CheckboxGroup };
