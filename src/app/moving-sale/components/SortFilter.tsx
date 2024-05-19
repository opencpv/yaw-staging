"use client";
import React from "react";
import Select from "@/app/dashboard/components/shared/ui/Select";
import Button from "@/components/__shared/ui/button/Button";
import { FaChevronDown } from "react-icons/fa6";
import ItemsFilterModal from "./ItemsFilterModal";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useDisclosure } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type ItemSort =
  | "popular"
  | "newest"
  | "price: high to low"
  | "price: low to high";

const SortFilter = () => {
  const router = useRouter();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const searchParams = useSearchParams();
  const sort = searchParams?.get("sort") || "popular";
  const categories = searchParams?.get("categories") || "";
  const condition = searchParams?.get("condition") || "";
  const negotiation = searchParams?.get("negotiation") || "";
  const priceRangeFrom = searchParams?.get("priceRangeFrom") || "";
  const priceRangeTo = searchParams?.get("priceRangeTo") || "";
  const category = searchParams?.get("category") || "";

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(
      `/moving-sale?${new URLSearchParams({
        sort: e.target.value,
        categories,
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
  };

  return (
    <>
      <ItemsFilterModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
      <div className="flex flex-wrap items-center gap-3">
        <Select
          radius="none"
          selectorIcon={<FaChevronDown />}
          options={[
            "Popular",
            "Newest",
            "Price: High to Low",
            "Price: Low to High",
          ]}
          value={sort as unknown as ItemSort}
          handleSelectionChange={handleSelectionChange}
          className="mx-0"
        />
        <Button color="accent" onClick={onOpen} className="h-unit-10">
          Filter
        </Button>
      </div>
    </>
  );
};

export default SortFilter;
