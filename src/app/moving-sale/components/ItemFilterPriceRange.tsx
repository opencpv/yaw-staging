import React from "react";
import { Input } from "@/components/__shared/ui/form/input";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";

type Props = {};

const ItemFilterPriceRange = (props: Props) => {
  const priceRangeFrom = useItemFilterStore((state) => state.priceRangeFrom);
  const priceRangeTo = useItemFilterStore((state) => state.priceRangeTo);
  const setPriceRangeFrom = useItemFilterStore(
    (state) => state.setPriceRangeFrom,
  );
  const setPriceRangeTo = useItemFilterStore((state) => state.setPriceRangeTo);

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <Input
          value={priceRangeFrom}
          label="Minimum"
          placeholder="GHS 50.00"
          onChange={(e) => setPriceRangeFrom(e.target.value)}
        />
        <Input
          value={priceRangeTo}
          label="Maximum"
          placeholder="GHS 70,000.00"
          onChange={(e) => setPriceRangeTo(e.target.value)}
        />
      </div>
    </>
  );
};

export default ItemFilterPriceRange;
