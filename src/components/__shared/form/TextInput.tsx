import { Input, cn } from "@nextui-org/react";
import React, { HTMLInputTypeAttribute } from "react";
import style from "./Form.module.css"

type Props = {
  label?: string;
  placeholder?: string;
  value?: string | null;
  name?: string;
  onChangeValue?: (val: string) => void;
  onChange?: (val: any) => void;
  onBlur?: (val?: any) => void;
  className?: string;
  labelClassName?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean
};

const TextInput = ({ label, labelClassName, placeholder, value, name, onBlur, onChange, onChangeValue, className, type, ...props }: Props) => {
  return (
    <Input
        classNames={{
            label: cn(`text-base text-neutral-500 mb-1.5 font-[400] ${props.required && `${style.required}`} ${labelClassName}`),
            inputWrapper: cn(`border rounded-md ${className}`),
            input: cn(`text-base py-8 focus:border-accent-50 ${className}`),
            // innerWrapper: cn(`${className} text-base`)
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
      {...props}
    />
  );
};

export default TextInput;
