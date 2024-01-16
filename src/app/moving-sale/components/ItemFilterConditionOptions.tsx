import React from "react";
import RadioChoices from "./RadioChoices";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

type Props = {};


const ConditionOptions = (props: Props) => {
  const condition = useItemFilterStore((state) => state.condition)
  const setCondition = useItemFilterStore((state) => state.setCondition)

  return (
    <RadioChoices<"new" | "used">
      value={condition as "new" | "used"} 
      choices={["New", "Used"]}
      onValueChange={setCondition}
    />
  );
};

export default ConditionOptions;
