"use client";
import React from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader/Loader";
const BeMyAgentModal = dynamic(
  () => import("../components/steps/BeMyAgentModal"),
);

const AgentCreatePage = () => {
  return <main className="flex flex-col gap-40">
      <BeMyAgentModal />
      <Loader position="center" />
    </main>
};

export default AgentCreatePage;
