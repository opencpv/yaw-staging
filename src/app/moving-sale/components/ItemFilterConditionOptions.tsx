import React from "react";
import RadioChoices from "./RadioChoices";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

type Condition = "new" | "used" | "all";

const ConditionOptions = () => {
  const condition = useItemFilterStore((state) => state.condition);
  const setCondition = useItemFilterStore((state) => state.setCondition);

  return (
    <RadioChoices<Condition>
      value={condition as Condition}
      choices={["New", "Used", "All"]}
      onValueChange={setCondition}
    />
  );
};

export default ConditionOptions;
