import { Checkbox } from "@/components/__shared/ui/form/checkbox";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";
import React from "react";

type Props = {
  options: string[];
};

const CategoryCheckboxes = ({ options }: Props) => {
  const categories = useItemFilterStore((state) => state.categories);
  const setCategories = useItemFilterStore((state) => state.setCategories);

  const handleCheckChange = (checked: boolean, option: string) => {
    if (checked) {
      setCategories([...categories, option]);
    } else {
      setCategories(categories.filter((c) => c !== option));
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
      {options.map((option) => (
        <Checkbox
          key={option}
          label={capitalizeName(option)}
          checked={categories.includes(option)}
          radius="md"
          onCheckedChange={(checked) =>
            handleCheckChange(checked as boolean, option)
          }
        />
      ))}
    </div>
  );
};

export default CategoryCheckboxes;
