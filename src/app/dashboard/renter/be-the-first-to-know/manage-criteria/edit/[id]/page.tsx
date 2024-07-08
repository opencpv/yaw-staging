"use client";
import dynamic from "next/dynamic";
import React from "react";
const BTFTKModal = dynamic(
  () => import("../../../components/steps/BTFTKModal"),
);

const CriteriaEditPage = () => {
  return <BTFTKModal />;
};

export default CriteriaEditPage;
