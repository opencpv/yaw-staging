"use client";
import React from "react";
import dynamic from "next/dynamic";
const BTFTKModal = dynamic(() => import("../components/steps/BTFTKModal"));

const CriteriaCreatePage = () => {
  return <BTFTKModal />;
};

export default CriteriaCreatePage;
