import React from "react";
import RadioChoices from "./RadioChoices";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

type Condition = "new" | "used";

const ConditionOptions = () => {
  const condition = useItemFilterStore((state) => state.condition);
  const setCondition = useItemFilterStore((state) => state.setCondition);

  return (
    <RadioChoices<Condition>
      value={condition as Condition}
      choices={["New", "Used"]}
      onValueChange={setCondition}
    />
  );
};

export default ConditionOptions;
