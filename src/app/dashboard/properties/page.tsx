"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ActionMain from "./components/ActionMain";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuMessageSquarePlus } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import PropertyRow from "./components/PropertyRow";
import OptionFilterTab from "./components/OptionFilterTab";
import PropertyRow2 from "./components/PropertyRow2";
import Spinner from "../components/shared/Spinner";
import ManagePropertiesTable from "./components/ManagePropertiesTable";
import ManagePropertiesSmallScreenView from "./components/ManagePropertiesSmallScreenView";
import ListingFormModal from "@/app/components/listing-form";

const PropertiesPage = () => {
  const { images } = useAssets();

  return (
    <main className="mx-auto max-w-screen-2xl text-neutral-800">
      <section className="mb-20">
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <h2 className="text-2xl font-[600]">Properties</h2>
          <div className="flex items-center gap-4">
            <small className="flex gap-2 items-center p-2 px-3 text-xs bg-[#FEF8ED] rounded-xl">
              Members post for free <FaArrowRight />
            </small>
            <AiOutlineExclamationCircle className="rotate-180 text-accent-50" />
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          {/* <ActionMain
            label="Create New Listing"
            icon={<LuMessageSquarePlus />}
          /> */}
          <ListingFormModal />
          <ActionMain label="Leads" icon={<HiOutlineUserGroup />} />
        </div>
      </section>
      <section className="items-center justify-between grid-cols-3 mb-6 gap-x-3 md:grid">
        <div className="col-span-1 space-y-4">
          <h2 className="text-2xl font-[600]">Manage Properties</h2>
          <small className="inline-block text-sm capitalize">
            Showing 05 Results
          </small>
        </div>
        <div className="col-span-2 mt-3 md:mt-0">
          <OptionFilterTab />
        </div>
      </section>
      {/* Table */}

      <ManagePropertiesTable />
      {/* Small screen view */}
      <ManagePropertiesSmallScreenView />
    </main>
  );
};

export default PropertiesPage;
