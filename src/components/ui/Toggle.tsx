import { Switch } from "@nextui-org/react";
import React from "react";

type Props = {
  label?: string;
  isSelected?: boolean;
  onValueChange?: () => void;
};

const Toggle = ({ label, isSelected, onValueChange }: Props) => {
  return (
    <Switch
      classNames={{
        thumb: "bg-neutral-200 group-data-[selected=true]:bg-accent-50",
        wrapper: "bg-transparent group-data-[selected=true]:bg-primary-300/20",
        label: "text-neutral-500",
      }}
      size="sm"
      isSelected={isSelected}
      onValueChange={onValueChange}
    >
      {label}
    </Switch>
  );
};

export default Toggle;
