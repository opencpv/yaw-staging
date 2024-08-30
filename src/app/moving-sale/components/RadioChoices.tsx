import { cn } from "@/lib/utils";
import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

type Props<T> = {
  value: T;
  options: T[];
  onValueChange: (value: T) => void;
};

function RadioChoices<T extends string>(props: Props<T>) {
  return (
    <RadioGroup.Root
      value={props.value}
      onValueChange={props.onValueChange}
      className="flex w-full gap-5"
    >
      {props.options?.map((option) => (
        <RadioGroup.Item
          key={option}
          value={option}
          className={cn(
            "size-fit rounded-full bg-neutral-100 p-2 px-5 text-shade-500 transition-colors hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border data-[state=checked]:border-accent",
          )}
        >
          {option}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}

export default RadioChoices;
