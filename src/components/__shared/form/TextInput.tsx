import { Input, cn } from "@nextui-org/react";
import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  placeholder?: string;
  value?: string | null;
  name?: string;
  onChangeValue?: (val: string) => void;
  className?: string;
  labelClassName?: string;
  type?: HTMLInputTypeAttribute
};

const TextInput = ({ label, labelClassName, placeholder, value, name, onChangeValue, className, type, ...props }: Props) => {
  return (
    <Input
        classNames={{
            label: cn(`text-base text-neutral-500 mb-1.5 font-[400] ${labelClassName}`),
            inputWrapper: cn(`border rounded-md ${className}`),
            input: cn(`text-base py-8 ${className}`),
            // innerWrapper: cn(`${className} text-base`)
        }}
      variant="bordered"
      value={value as string}
      onValueChange={onChangeValue}
      label={label}
      name={name}
      labelPlacement="outside"
      placeholder={placeholder as string}
      {...props}
    />
  );
};

export default TextInput;
