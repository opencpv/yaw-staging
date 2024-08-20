import ErrorMessage from "@/components/__shared/ui/states/ErrorMessage";
import { cn } from "@/lib/utils";
import { styled } from "@stitches/react";
import { useField } from "formik";
import React from "react";

type Props = {
  rows?: number;
  classes: string;
  onChange?: (e: any) => void;
  placeholder: string;
  label?: string;
  name?: string;
  initialValues?: string;
  required?: boolean;
  characterLimit?: number;
};

const CustomTextAreaInput = ({
  label,
  classes,
  onChange,
  placeholder,
  name,
  initialValues,
  required,
  characterLimit,
}: Props) => {
  const [field, meta, helpers] = useField(name as string);
  const fieldLength = field.value?.length || 0;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, characterLimit: number) => {
    const slicedChacracters = e.target.value.slice(0, characterLimit);
      // @ts-ignore
      if (e.nativeEvent.inputType === "insertFromPaste") {
        field.onChange({target: {name: field.name, value: slicedChacracters}})
    }
      if (
        fieldLength < characterLimit ||
      // @ts-ignore
        e.nativeEvent.inputType === "deleteContentBackward"
      ) {
        onChange && onChange({target: {value: slicedChacracters}});
        field.onChange({target: {name: field.name, value: slicedChacracters}})
      }
  }

  return (
    <Root className="text-[#6A6968]">
      {label && (
        <label htmlFor="" className="flex gap-x-1.5">
          {label}{" "}
          {required && (
            <span className="relative text-sm text-shade-300">*</span>
          )}
        </label>
      )}

      {characterLimit ? (
        <div className="flex flex-col gap-2">
          <textarea
            className={`form-input hidden-scrollbar pb-5 hover:border-black/50 focus:outline-accent-50 ${classes}`}
            placeholder={placeholder}
            onChange={(e) => handleChange(e, characterLimit)}
            name={field.name}
            value={field.value}
            defaultValue={initialValues}
          />
          <small
            className={cn("text-primary", {
              "text-red-500":
                fieldLength === characterLimit || (meta.touched && meta.error),
            })}
          >
            {field.value?.length} / {characterLimit}
          </small>
        </div>
      ) : (
        <textarea
          className={`form-input hidden-scrollbar pb-5 hover:border-black/50 focus:outline-accent-50 ${classes}`}
          placeholder={placeholder}
          onChange={(e) => {
            onChange && onChange(e);
            field.onChange(e);
          }}
          name={field.name}
          value={field.value}
          defaultValue={initialValues}
        />
      )}

      {meta.touched && meta.error ? (
        <ErrorMessage error={meta.error}>{meta.error}</ErrorMessage>
      ) : null}
    </Root>
  );
};

const Root = styled("div", {
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  ".form-input": {
    padding: "15px",
    fontSize: " 0.8125rem",
    border: "1px solid #a3a3a3",
    borderRadius: "4px",
  },
});

export default CustomTextAreaInput;
