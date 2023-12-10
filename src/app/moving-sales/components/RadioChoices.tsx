import capitalizeName from "@/lib/utils/stringManipulation";
import { Radio, RadioGroup, cn } from "@nextui-org/react";
import React from "react";

type RadioChoicesProps<T> = {
  choices: string[];
  value: T;
  onValueChange: (newVal: T) => void;
};

const RadioChoice = (props: any) => {
  const { children, ...otherProps } = props;
  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "flex-row-reverse bg-neutral-100 rounded-3xl",
          "data-[selected=true]:border data-[selected=true]:border-accent-50",
          "hover:bg-neutral-200"
        ),
        label: "text-sm pr-3",
        wrapper: cn("hidden"),
      }}
    >
      {children}
    </Radio>
  );
};

const RadioChoices = <T extends string>({ choices, value, onValueChange  }: RadioChoicesProps<T>) => {
  return (
    <div>
      <RadioGroup
        color="primary"
        classNames={{ wrapper: cn("gap-8") }}
        orientation="horizontal"
        value={value}
        onValueChange={onValueChange as () => void}
      >
        {choices.map((choice) => (
          <RadioChoice key={choice} value={choice.toLowerCase()}>
            {capitalizeName(choice)}
          </RadioChoice>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioChoices;
