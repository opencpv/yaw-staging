import React from "react";
import RadioChoices from "./RadioChoices";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

const ItemFilterTerms = () => {
  const negotiation = useItemFilterStore((state) => state.negotiation);
  const setNegotiation = useItemFilterStore((state) => state.setNegotiation);

  return (
    <RadioChoices<"negotiable" | "non-negotiable">
      value={negotiation as "negotiable" | "non-negotiable"}
      choices={["Negotiable", "Non-negotiable"]}
      onValueChange={setNegotiation}
    />
  );
};

export default ItemFilterTerms;
