"use client";
import React from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import ManageApplicationsTable from "./components/ManageApplicationsTable";
import ManageApplicationsSmallScreen from "./components/ManageApplicationsSmallScreen";
import { useApplicationsStore } from "@/store/dashboard/applicationsStore";

const ApplicationsPage = () => {
  const fetchCount = useApplicationsStore((state) => state.fetchCount);

  const { images } = useAssets();
  return (
    <main className="mx-auto max-w-screen-2xl text-neutral-800">
      <section className="mb-6">
        <h2 className="text-2xl font-[700] mb-2">Applications</h2>
        <small className="inline-block text-sm capitalize">
          {fetchCount &&
            `Showing ${
              (fetchCount as number) > 9 ? fetchCount : `0${fetchCount}`
            } Results`}
        </small>
      </section>
      {/* Table */}
      <ManageApplicationsTable />
      {/* Small screen view */}
      <ManageApplicationsSmallScreen />
    </main>
  );
};

export default ApplicationsPage;
