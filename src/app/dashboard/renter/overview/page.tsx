import React from "react";
import RenterOverviewPage from "./components/RenterOverviewPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "", // tentative
};

const page = () => {
  return <RenterOverviewPage />;
};

export default page;
