import React from "react";
import RadioChoices from "./RadioChoices";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

const ConditionOptions = () => {
  const condition = useItemFilterStore((state) => state.condition);
  const setCondition = useItemFilterStore((state) => state.setCondition);

  return (
    <RadioChoices
      value={condition}
      options={["New", "Used-Like New", "Used", "All"]}
      onValueChange={setCondition}
    />
  );
};

export default ConditionOptions;
