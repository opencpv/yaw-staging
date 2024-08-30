import { Button } from "@/components/__shared/ui/button";
import React from "react";
import CategoryCheckboxes from "./CategoryCheckboxes";
import ItemsFilterModalOption from "./ItemsFilterModalOption";
import ItemFilterConditionOptions from "./ItemFilterConditionOptions";
import ItemFilterPriceRange from "./ItemFilterPriceRange";
import ItemFilterTerms from "./ItemFilterTerms";
import { useItemFilterStore } from "@/store/moving_sales/useMovingSalesStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useFetchItemCategories } from "../services";
import { LiaTimesSolid } from "react-icons/lia";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
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
  return <hr className="mb-4 mt-7" />;
};

const FilterModalBody = () => {
  const { data: categories, isLoading } = useFetchItemCategories();

  return (
    <main className="space-y-10 pb-10">
      <ItemsFilterModalOption title="Categories">
        {isLoading ? (
          <Loader position="center" />
        ) : (
          <CategoryCheckboxes
            options={categories?.map(({ category }) => category) || []}
          />
        )}
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
  const sort = searchParams?.get("sort") || "Newest";
  const category = searchParams?.get("category") || "";
  const {
    categories,
    condition,
    term,
    priceRangeFrom,
    priceRangeTo,
    clearAll,
  } = useItemFilterStore();

  const handleSubmit = () => {
    router.replace(
      `/moving-sale?${new URLSearchParams({
        sort: sort as string,
        categories: categories.join(","),
        condition,
        term,
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
    <span className="flex w-full flex-wrap items-center justify-between gap-5">
      <Button variant="accent" onClick={handleSubmit}>
        Filter
      </Button>
      <Button
        variant="ghost"
        size={"fit"}
        className="text-sm text-shade-500 underline"
        onClick={clearAll}
      >
        Clear All <LiaTimesSolid />
      </Button>
    </span>
  );
};

export default ItemsFilterModal;
