import React from "react";
import RadioChoices from "./RadioChoices";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

const ItemFilterTerms = () => {
  const term = useItemFilterStore((state) => state.term);
  const setTerm = useItemFilterStore((state) => state.setTerm);

  return (
    <RadioChoices<"negotiable" | "non-negotiable" | "all">
      value={term as "negotiable" | "non-negotiable" | "all"}
      choices={["Negotiable", "Non-negotiable", "All"]}
      onValueChange={setTerm}
    />
  );
};

export default ItemFilterTerms;
