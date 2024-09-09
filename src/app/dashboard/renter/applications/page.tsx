"use client";
import React from "react";
import RtManageApplicationsTable from "./components/RtManageApplicationsTable";
import RtManageApplicationsSmallScreen from "./components/RtManageApplicationsSm";

const page = () => {
  return (
    <main className="text-neutral-800">
      <section className="mb-6 space-y-5">
        <h2>My Applications</h2>
        <small className="inline-block text-sm capitalize"></small>
      </section>
      {/* Table */}
      <RtManageApplicationsTable />
      {/* Small screen view */}
      <RtManageApplicationsSmallScreen />
    </main>
  );
};

export default page;
