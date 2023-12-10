import { Input } from "@nextui-org/react";
import React from "react";
import RadioChoices from "./RadioChoices";
import TextInput from "@/components/__shared/form/TextInput";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

type Props = {};

const ItemFilterPriceRange = (props: Props) => {
  const negotiation = useItemFilterStore((state) => state.negotiation);
  const setNegotiation = useItemFilterStore((state) => state.setNegotiation);
  const priceRangeFrom = useItemFilterStore((state) => state.priceRangeFrom);
  const priceRangeTo = useItemFilterStore((state) => state.priceRangeTo);
  const setPriceRangeFrom = useItemFilterStore((state) => state.setPriceRangeFrom);
  const setPriceRangeTo = useItemFilterStore((state) => state.setPriceRangeTo);

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <TextInput
          value={priceRangeFrom}
          label="Minimum"
          placeholder="GHS 50.00"
          onChangeValue={setPriceRangeFrom}
        />
        <TextInput
          value={priceRangeTo}
          label="Maximum"
          placeholder="GHS 70,000.00"
          onChangeValue={setPriceRangeTo}
        />
      </div>
      <RadioChoices<"negotiable" | "non-negotiable">
        value={negotiation as "negotiable" | "non-negotiable"}
        choices={["Negotiable", "Non-negotiable"]}
        onValueChange={setNegotiation}
      />
    </>
  );
};

export default ItemFilterPriceRange;
