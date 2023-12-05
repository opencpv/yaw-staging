import Button from "@/components/__shared/Button";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import ItemCard from "../components/ItemCard";
import BreadCrumbPreLink from "@/components/__shared/ui/BreadCrumbPreLink";
import ItemImages from "../components/ItemImages";
import ItemDetails from "../components/ItemDetails";
import ItemOwnerContact from "../components/ItemOwnerContact";
import ItemRelatedItems from "../components/ItemRelatedItems";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="my-10 section text-neutral-400">
      <div className="flex items-center gap-2 mb-5 text-sm">
        <BreadCrumbPreLink href="/moving-sales" label="Shop" />
        <FaChevronRight className="text-neutral-400" />
        <p className="font-[600] text-neutral-800">Item name</p>
      </div>
      <ItemImages />
      <section className="grid gap-x-20 gap-y-10 mb-20 lg:grid-cols-3">
        {/* Grid col */}
        <ItemDetails />
        {/* Grid col */}
        <ItemOwnerContact />
      </section>
      <ItemRelatedItems />
    </main>
  );
};

export default page;
