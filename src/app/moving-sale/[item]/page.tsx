import React from "react";
import { FaChevronRight } from "react-icons/fa";
import BreadCrumbPreLink from "@/components/__shared/ui/BreadCrumbPreLink";
import ItemImages from "../components/item/ItemImages";
import ItemDetails from "../components/item/ItemDetails";
import ItemOwnerContact from "../components/item/ItemOwnerContact";
import ItemRelatedItems from "../components/item/ItemRelatedItems";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="wrapper text-neutral-400">
      <div className="mb-5 flex items-center gap-2">
        <BreadCrumbPreLink href="/moving-sale" label="Shop" />
        <FaChevronRight className="text-neutral-400" />
        <p className="font-[600] text-neutral-800">Item name</p>
      </div>
      <ItemImages />
      <section className="mb-20 grid gap-x-20 gap-y-10 lg:grid-cols-3">
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
