"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import LargeButton from "./components/LargeButton";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import ManagePropertiesTable from "./components/ManagePropertiesTable";
import ManagePropertiesSmallScreenView from "./components/ManagePropertiesSmallScreenView";
import ManagePropertiesTabs from "./components/ManagePropertiesTabs";
import ListingFormModal from "@/app/components/listing-form";
import FetchCount from "../components/shared/FetchCount";
import { ClientOnly } from "@/components/ui/ClientOnly";

const page = () => {
  return (
    <main className="mx-auto max-w-screen-2xl text-neutral-800">
      <section className="mb-20">
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <h2 className="text-2xl font-[700]">Properties</h2>
          <div className="flex items-center gap-4">
            <small className="flex gap-2 items-center p-2 px-3 text-xs bg-[#FEF8ED] rounded-xl">
              Members post for free <FaArrowRight />
            </small>
            <AiOutlineExclamationCircle className="rotate-180 text-accent-50" />
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          {/* <ClientOnly>
            <ListingFormModal />
          </ClientOnly> */}
          <LargeButton label="Leads" icon={<HiOutlineUserGroup />} />
        </div>
      </section>
      <section className="items-center justify-between grid-cols-3 mb-6 gap-x-3 md:grid">
        <div className="col-span-1 space-y-4">
          <h2 className="text-2xl font-[700]">Manage Properties</h2>
          <FetchCount data="manage-properties" />
        </div>
        <div className="col-span-2 mt-3 md:mt-0">
          <ManagePropertiesTabs />
        </div>
      </section>
      {/* Table */}
      <ManagePropertiesTable />
      {/* Small screen view */}
      <ManagePropertiesSmallScreenView />
    </main>
  );
};

export default page;
