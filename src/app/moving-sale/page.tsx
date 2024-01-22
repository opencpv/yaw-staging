"use client";
import React from "react";
import Category from "./components/category/Category";
import CallOut from "@/components/__shared/ui/CallOut";
import Select from "../dashboard/components/Select";
import Button from "@/components/__shared/ui/button/Button";
import { FaChevronDown } from "react-icons/fa";
import ItemCard from "./components/item/ItemCard";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useDisclosure } from "@nextui-org/react";
import ItemsFilterModal from "./components/ItemsFilterModal";

type ItemSort =
  | "popular"
  | "newest"
  | "price: high to low"
  | "price: low to high";

const MovingSalesPage = () => {
  const { value, handleSelectionChange } =
    useSelectDisclosure<ItemSort>("popular");

  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ItemsFilterModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
      <main className="wrapper overflow-x-hidden text-neutral-600">
        {/* Banner */}
        <section className="relative mb-20 h-60 w-full text-white sm:h-96">
          <SliderWide
            pagination
            autoplay
            className="absolute sm:h-96"
            images={[1, 2, 3].map((image) => ({
              src: "/assets/images/about/about-slider-img.webp",
              name: "",
              href: "/blog/c/p",
            }))}
          />
          <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center rounded-xl">
            <div className="absolute h-full w-full rounded-xl bg-opacity-20 bg-gradient-to-r from-primary-500 to-transparent"></div>
            <h1 className="relative z-20 pl-5 text-4xl font-[700] xs:pl-20 sm:text-5xl">
              Shop
            </h1>
          </div>
        </section>
        {/* Categories */}
        <section className="mx-auto mb-10 flex justify-center">
          <div className="mx-auto flex flex-wrap justify-center gap-5">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <Category
                key={idx + 1}
                category="Category"
                image="/assets/images/about/young-couple.webp"
                count={20}
                className="w-full min-[345px]:w-fit"
              />
            ))}
          </div>
        </section>
        <div className="mb-20 flex items-center justify-center">
          <CallOut
            text="You may select more than one response"
            className="w-full md:w-9/12"
          />
        </div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="">Showing 12 results</p>
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
              value={value}
              handleSelectionChange={handleSelectionChange}
              className="mx-0"
            />
            <Button color="accent" onClick={onOpen}>
              Filter
            </Button>
          </div>
        </div>
        {/* Items */}
        <section className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 12, 7, 8, 4, 20, 7].map((_, idx) => (
            <ItemCard
              key={idx + 1}
              href={`/moving-sale/${1}`}
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet consectetur. Viverra mattis lacus mi dolor sed et leo id mus ultrices."
              image="/assets/images/about/young-couple.webp"
              price={16.48}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default MovingSalesPage;
