import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/ui/modals/Modal";
import React from "react";
import CategoryCheckboxes from "./category/CategoryCheckboxes";
import ItemsFilterModalOption from "./ItemsFilterModalOption";
import ItemFilterConditionOptions from "./ItemFilterConditionOptions";
import ItemFilterPriceRange from "./ItemFilterPriceRange";
import ItemFilterTerms from "./ItemFilterTerms";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};

type FilterModalFooterProps = {
  onClose: () => void;
};

const ItemsFilterModal = (props: Props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      header={<FilterModalHeader />}
      body={<FilterModalBody />}
      footer={<FilterModalFooter onClose={props.onClose} />}
      size="lg"
    />
  );
};

const FilterModalHeader = () => {
  return <hr className="mt-5" />;
};

const FilterModalBody = () => {
  return (
    <main className="space-y-10 pb-10">
      <ItemsFilterModalOption title="Categories">
        <CategoryCheckboxes
          options={["Electrical", "Furniture", "Art", "Urn", "Miscellaneous"]}
        />
      </ItemsFilterModalOption>
      <ItemsFilterModalOption title="Condition">
        <ItemFilterConditionOptions />
      </ItemsFilterModalOption>
      <ItemsFilterModalOption title="Price Range">
        <ItemFilterPriceRange />
      </ItemsFilterModalOption>
      <ItemsFilterModalOption title="Terms">
        <ItemFilterTerms />
      </ItemsFilterModalOption>
    </main>
  );
};

const FilterModalFooter = ({ onClose }: FilterModalFooterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams?.get("sort") || "newest";
  const category = searchParams?.get("category") || "";
  const { categories, condition, negotiation, priceRangeFrom, priceRangeTo } =
    useItemFilterStore();

  const handleSubmit = () => {
    router.replace(
      `/moving-sale?${new URLSearchParams({
        sort: sort as string,
        categories: categories.join(","),
        condition,
        negotiation,
        priceRangeFrom,
        priceRangeTo,
        category,
      })}`,
      {
        scroll: false,
      },
    );
    onClose();
  };
  return (
    <Button color="accent" className="w-48 max-w-xs" onClick={handleSubmit}>
      Filter
    </Button>
  );
};

export default ItemsFilterModal;
