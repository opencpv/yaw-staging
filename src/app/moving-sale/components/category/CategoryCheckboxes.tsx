import Checkbox from "@/components/__shared/form/Checkbox";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";
import { CheckboxGroup, cn } from "@nextui-org/react";
import React from "react";

type Props = {
  options: string[];
};

const CategoryCheckboxes = ({ options }: Props) => {
  const categories = useItemFilterStore((state) => state.categories);
  const setCategories = useItemFilterStore((state) => state.setCategories);

  return (
    <CheckboxGroup
      classNames={{ wrapper: cn("gap-x-10 gap-y-6") }}
      orientation="horizontal"
      value={categories}
      onValueChange={setCategories}
    >
      {options.map((option) => (
        <Checkbox
          key={option}
          labelColor="text-neutral-500"
          labelSize="text-base"
          label={capitalizeName(option)}
          value={option.toLowerCase()}
        />
      ))}
    </CheckboxGroup>
  );
};

export default CategoryCheckboxes;
