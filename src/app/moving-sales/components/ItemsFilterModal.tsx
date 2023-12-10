import Button from "@/components/__shared/Button";
import Modal from "@/components/__shared/modals/Modal";
import React from "react";
import CategoryCheckboxes from "./category/CategoryCheckboxes";
import ItemsFilterModalOption from "./ItemsFilterModalOption";
import ItemFilterConditionOptions from "./ItemFilterConditionOptions";
import ItemFilterPriceRange from "./ItemFilterPriceRange";

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
    <main className="space-y-10">
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
    </main>
  );
};

const FilterModalFooter = ({ onClose }: FilterModalFooterProps) => {
  return (
    <Button color="accent" className="max-w-xs w-48" onClick={onClose}>
      Filter
    </Button>
  );
};

export default ItemsFilterModal;
