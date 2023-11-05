import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ActionMain from "./components/ActionMain";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuMessageSquarePlus } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import PropertyRow from "./components/PropertyRow";
import OptionFilterTab from "./components/OptionFilterTab";

const PropertiesPage = () => {
  const { images } = useAssets();
  return (
    <main className="mx-auto max-w-screen-2xl text-neutral-800">
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-2xl font-[600]">Properties</h2>
          <small className="flex gap-2 items-center p-2 px-3 text-xs bg-[#FEF8ED] rounded-xl">
            Members post for free <FaArrowRight />
          </small>
          <AiOutlineExclamationCircle className="rotate-180 text-accent-50" />
        </div>
        <div className="flex gap-5">
          <ActionMain
            label="Create New Listing"
            icon={<LuMessageSquarePlus />}
          />
          <ActionMain label="Leads" icon={<HiOutlineUserGroup />} />
        </div>
      </section>
      <section className="grid items-center justify-between grid-cols-3 mb-6 gap-x-10">
        <div className="col-span-1 space-y-4">
          <h2 className="text-2xl font-[600]">Manage Properties</h2>
          <small className="inline-block text-sm capitalize">
            Showing 05 Results
          </small>
        </div>
        <div className="col-span-2">
          <OptionFilterTab />
        </div>
      </section>
      {/* Table */}
      <table className="w-full table-fixed mb-20">
        <thead className="text-white bg-primary-400">
          <tr className="">
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Property
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Posted on
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Status
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <PropertyRow
            propertyTitle="Property Title"
            image="/assets/images/Stock.jpg"
            price={30000}
            posted_on="2023-08-31 13:23:00"
            status="Not paid"
          />
          <PropertyRow
            propertyTitle="Property Title"
            image="/assets/images/Stock.jpg"
            price={30000}
            posted_on="2023-10-23 1:10:00"
            status="Paid"
          />
          <PropertyRow
            propertyTitle="Property Title"
            image="/assets/images/Stock.jpg"
            price={30000}
            posted_on="2023-08-15 13:53:00"
            status="Not paid"
          />
          <PropertyRow
            propertyTitle="Property Title"
            image="/assets/images/Stock.jpg"
            price={30000}
            posted_on="2023-01-30 8:40:20"
            status="Paid"
          />
          <PropertyRow
            propertyTitle="Property Title"
            image="/assets/images/Stock.jpg"
            price={30000}
            posted_on="2023-05-1 10:01:00"
            status="Paid"
          />
        </tbody>
      </table>
    </main>
  );
};

export default PropertiesPage;
