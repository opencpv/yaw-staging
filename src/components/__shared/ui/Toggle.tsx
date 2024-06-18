import { cn } from "@/lib/utils";
import { Switch, SwitchProps } from "@nextui-org/react";
import React from "react";

type Props = {
  label?: string;
  isSelected?: boolean;
  onValueChange?: (isSelected: boolean) => void;
  disabled?: boolean;
  color?: "primary" | "accent";
  title?: string;
};

const Toggle = ({
  label,
  isSelected,
  onValueChange,
  disabled,
  color,
  title,
}: Props) => {
  return (
    <Switch
      classNames={{
        thumb: cn("bg-white group-data-[selected=true]:bg-accent-50", {
          "bg-neutral-300 border group-data-[selected=true]:bg-white group-data-[selected=true]:border-none":
            color === "accent" || color === "primary",
        }),
        wrapper: cn(
          "bg-neutral-200 shadow-sm group-data-[selected=true]:bg-primary-300/80",
          {
            "border bg-white group-data-[selected=true]:bg-accent group-data-[selected=true]:border-none":
              color === "accent",
            "border bg-white group-data-[selected=true]:bg-primary group-data-[selected=true]:border-none":
              color === "primary",
            "group-data-[disabled=true]:cursor-not-allowed": disabled,
          },
        ),
        label: cn("text-neutral-500"),
      }}
      size="sm"
      isSelected={isSelected}
      onValueChange={onValueChange}
      isDisabled={disabled}
      title={title}
    >
      {label}
    </Switch>
  );
};

export default Toggle;
