import React from "react";
import RadioChoices from "./RadioChoices";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

const ItemFilterTerms = () => {
  const term = useItemFilterStore((state) => state.term);
  const setTerm = useItemFilterStore((state) => state.setTerm);

  return (
    <RadioChoices
      value={term}
      options={["Negotiable", "Non-Negotiable", "All"]}
      onValueChange={setTerm}
    />
  );
};

export default ItemFilterTerms;
