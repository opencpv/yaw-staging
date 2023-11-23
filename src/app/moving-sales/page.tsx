"use client";
import Navbar from "@/components/__shared/Navbar";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Category from "./components/Category";
import Info from "@/components/__shared/Info";
import Select from "../dashboard/components/Select";
import Button from "@/components/__shared/Button";
import { FaChevronDown } from "react-icons/fa";
import ItemCard from "./components/ItemCard";

type Props = {};

const MovingSalesPage = (props: Props) => {
  const [value, setValue] = useState<"popularity" | "highly rated">(
    "popularity"
  );
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as "popularity" | "highly rated");
  };

  return (
    <>
      <Navbar />
      <main className="my-10 section text-neutral-600">
        {/* Banner */}
        <section className="relative flex items-center w-full mb-20 text-white rounded-xl h-60 sm:h-96">
          <Image
            src="/assets/images/about/young-couple.webp"
            alt=""
            className="rounded-xl"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-full h-full rounded-xl bg-gradient-to-r from-primary-500 to-transparent bg-opacity-30"></div>
          <h1 className="relative z-20 font-[700] text-4xl pl-5 xs:pl-20 sm:text-5xl">Shop</h1>
        </section>
        {/* Categories */}
        <section className="flex justify-center mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-5 mx-auto">
            {[1, 2, 3, 4, 5, 6].map((category, idx) => (
              <Category key={idx + 1} category="Category" image="/assets/images/about/young-couple.webp" count={20} className="w-full min-[345px]:w-fit" />
            ))}
          </div>
        </section>
        <div className="flex items-center justify-center mb-20">
          <Info
            text="You may select more than one response"
            className="w-full md:w-9/12"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 text-sm">
          <p className="">Showing 12 results</p>
          <div className="flex flex-wrap items-center gap-3">
            <Select
              radius="none"
              selectorIcon={<FaChevronDown />}
              options={["Popularity", "Highly rated"]}
              value={value}
              handleSelectionChange={handleSelectionChange}
            />
            <Button color="accent">
              Filter
            </Button>
          </div>
        </div>
        {/* Items */}
        <section className="grid mb-20 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 6, 7, 8, 4, 6, 7].map((item, idx) => (
            <ItemCard
              key={idx + 1}
              href={`/moving-sales/${1}`}
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet consectetur. Viverra mattis lacus mi dolor sed et leo id mus ultrices."
              image="/assets/images/about/young-couple.webp"
              price={16.48}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MovingSalesPage;
