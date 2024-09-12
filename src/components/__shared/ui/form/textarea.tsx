import * as React from "react";

import { cn } from "@/lib/utils";
import { FieldInputProps, FieldMetaProps, useFormikContext } from "formik";
import ErrorMessage from "../states/error-message";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  characterLimit?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      name,
      onChange,
      value,
      characterLimit,
      required,
      ...props
    },
    ref,
  ) => {
    const formikContext = useFormikContext();
    let field: FieldInputProps<any> | undefined;
    let meta: FieldMetaProps<any> | undefined;
    let fieldLength = (value as string)?.length || 0;

    if (formikContext) {
      field = formikContext.getFieldProps(name as string);
      meta = formikContext.getFieldMeta(name as string);
      fieldLength = field.value?.length || 0;
    }

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>,
      characterLimit: number,
    ) => {
      const slicedChacracters = e.target.value.slice(0, characterLimit);
      // @ts-ignore
      if (e.nativeEvent.inputType === "insertText") {
        onChange?.({
          // @ts-ignore
          target: { value: slicedChacracters },
        });
        field?.onChange({
          target: { name: field.name, value: slicedChacracters },
        });
      }
      // @ts-ignore
      if (e.nativeEvent.inputType === "insertFromPaste") {
        onChange?.({
          // @ts-ignore
          target: { value: slicedChacracters },
        });
        field?.onChange({
          target: { name: field.name, value: slicedChacracters },
        });
      }
      if (
        (fieldLength && fieldLength < characterLimit) ||
        // @ts-ignore
        e.nativeEvent.inputType === "deleteContentBackward"
      ) {
        onChange?.({
          // @ts-ignore
          target: { value: slicedChacracters },
        });
        field?.onChange({
          target: { name: field.name, value: slicedChacracters },
        });
      }
    };

    const handleChangeWithoutCharLimit = (
      e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      onChange?.(e);
      field?.onChange(e);
    };

    return (
      <label className="flex w-full flex-col gap-4 text-shade-300">
        {label && (
          <h5 className="flex gap-x-1.5 font-normal capitalize">
            {label}
            {required && (
              <span className="relative text-sm text-shade-300">*</span>
            )}
          </h5>
        )}
        <div className={cn({ "flex flex-col gap-2": characterLimit })}>
          <textarea
            name={field?.name || name}
            value={field?.value || value}
            className={cn(
              "form-field-border flex h-[167px] min-h-[80px] w-full rounded-md bg-white px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-2 focus:border-primary focus:outline-none focus-visible:!border-primary disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            onChange={(e) => {
              characterLimit
                ? handleChange(e, characterLimit as number)
                : handleChangeWithoutCharLimit(e);
            }}
            onBlur={(e) => {
              field?.onBlur(e);
              props.onBlur?.(e);
            }}
            ref={ref}
            required={required}
            {...props}
          />
          {characterLimit && (
            <small
              className={cn("text-primary", {
                "text-red-500":
                  fieldLength === characterLimit ||
                  (meta?.touched && meta.error),
              })}
            >
              {fieldLength} / {characterLimit}
            </small>
          )}
        </div>
        {formikContext ? <ErrorMessage name={field?.name as string} /> : null}
      </label>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
