"use client";
import React from "react";
import { Select } from "@/components/__shared/ui/form/select";
import { Button } from "@/components/__shared/ui/button";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const ItemsFilterModal = dynamic(() => import("./ItemsFilterModal"));

type ItemSort =
  | "Popular"
  | "Newest"
  | "Price: High to Low"
  | "Price: Low to High";

const SortFilter = () => {
  const router = useRouter();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const searchParams = useSearchParams();
  const sort = searchParams?.get("sort") || "Newest";
  const categories = searchParams?.get("categories") || "";
  const condition = searchParams?.get("condition") || "";
  const term = searchParams?.get("term") || "";
  const priceRangeFrom = searchParams?.get("priceRangeFrom") || "";
  const priceRangeTo = searchParams?.get("priceRangeTo") || "";
  const category = searchParams?.get("category") || "";

  const handleSelectionChange = (value: string) => {
    router.replace(
      `/moving-sale?${new URLSearchParams({
        sort: value,
        categories,
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
          color="accent"
          options={[
            "Popular",
            "Newest",
            "Price: High to Low",
            "Price: Low to High",
          ]}
          value={sort as unknown as ItemSort}
          onValueChange={handleSelectionChange}
        />
        <Button variant="accent" onClick={onOpen} className="h-unit-10">
          Filter
        </Button>
      </div>
    </>
  );
};

export default SortFilter;
