"use client";
import React from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader";
const BTFTKModal = dynamic(() => import("../components/steps/BTFTKModal"));

const CriteriaCreatePage = () => {
  return (
    <main className="flex flex-col gap-40">
      <BTFTKModal />
      <Loader position="center" />
    </main>
  );
};

export default CriteriaCreatePage;
