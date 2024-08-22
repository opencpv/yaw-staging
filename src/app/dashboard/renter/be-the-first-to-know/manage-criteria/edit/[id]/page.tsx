"use client";
import Loader from "@/components/__shared/ui/loader";
import dynamic from "next/dynamic";
import React from "react";
const BTFTKModal = dynamic(
  () => import("../../../components/steps/BTFTKModal"),
);

const CriteriaEditPage = () => {
  return (
    <main className="flex flex-col gap-40">
      <BTFTKModal />
      <Loader position="center" />
    </main>
  );
};

export default CriteriaEditPage;
