"use client";
import React from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader";
const BeMyAgentModal = dynamic(
  () => import("../../../components/steps/BeMyAgentModal"),
);

const AgenEditPage = () => {
  return (
    <main className="flex flex-col gap-40">
      <BeMyAgentModal />
      <Loader />
    </main>
  );
};

export default AgenEditPage;
