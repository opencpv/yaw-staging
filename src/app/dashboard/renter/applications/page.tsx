"use client";
import React from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import RtManageApplicationsTable from "./components/RtManageApplicationsTable";
import RtManageApplicationsSmallScreen from "./components/RtManageApplicationsSm";
import { useApplicationsStore } from "@/store/dashboard/applicationsStore";

const ApplicationsPage = () => {
  const fetchCount = useApplicationsStore((state) => state.fetchCount);

  const { images } = useAssets();
  return (
    <main className="text-neutral-800">
      <section className="mb-6">
        <h2>My Applications</h2>
        <small className="inline-block text-sm capitalize">
          {fetchCount &&
            `Showing ${
              (fetchCount as number) > 9 ? fetchCount : `0${fetchCount}`
            } Results`}
        </small>
      </section>
      {/* Table */}
      <RtManageApplicationsTable />
      {/* Small screen view */}
      <RtManageApplicationsSmallScreen />
    </main>
  );
};

export default ApplicationsPage;
