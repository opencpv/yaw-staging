import { Input, cn } from "@nextui-org/react";
import React, { HTMLInputTypeAttribute, Ref, forwardRef } from "react";
import style from "./Form.module.css";

type Props = {
  label?: string;
  placeholder?: string;
  value?: string | null;
  name?: string;
  onChangeValue?: (val: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (val?: any) => void;
  className?: string;
  classNames?: {
    innerWrapper?: string;
    label?: string;
  };
  labelClassName?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  asterisk?: boolean;
};

const TextInput = (
  {
    label,
    labelClassName,
    placeholder,
    value,
    name,
    onBlur,
    onChange,
    onChangeValue,
    className,
    classNames,
    type,
    asterisk = true,
    required,
    ...props
  }: Props,
  ref: Ref<HTMLInputElement> | undefined,
) => {
  return (
    <Input
      classNames={{
        label: cn(
          `text-base text-neutral-500 focus:outline-none mb-1.5 font-[400] ${
            required && asterisk && style.required
          }`,
          classNames?.label,
        ),
        inputWrapper: cn(
          `border-neutral-400 border hover:border-black/50 rounded-md group-data-[focus=true]:border-accent-50 group-data-[focus=true]:border-2 `,
          classNames?.innerWrapper,
        ),
        input: cn(`text-base py-8 focus:border-accent-50`, className),
      }}
      variant="bordered"
      value={value as string}
      onValueChange={onChangeValue}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      name={name}
      labelPlacement="outside"
      placeholder={placeholder as string}
      ref={ref}
      isRequired={required}
      {...props}
    />
  );
};

export default forwardRef(TextInput);
