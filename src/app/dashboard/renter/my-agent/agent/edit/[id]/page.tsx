"use client";
import React from "react";
import dynamic from "next/dynamic";
const BeMyAgentModal = dynamic(
  () => import("../../../components/steps/BeMyAgentModal"),
);

const AgenEditPage = () => {
  return <BeMyAgentModal />;
};

export default AgenEditPage;
