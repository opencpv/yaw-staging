import { Input, cn } from "@nextui-org/react";
import React from "react";

type Props = {
  label: string;
  placeholder?: string;
  value: string | null;
  onChangeValue: (val: string) => void;
};

const TextInput = ({ label, placeholder, value, onChangeValue }: Props) => {
  return (
    <Input
        classNames={{
            label: cn("text-base text-neutral-500 mb-1.5 font-[400]"),
            inputWrapper: cn("border rounded-md"),
        }}
      variant="bordered"
      value={value as string}
      onValueChange={onChangeValue}
      label={label}
      labelPlacement="outside"
      placeholder={placeholder as string}
    />
  );
};

export default TextInput;
