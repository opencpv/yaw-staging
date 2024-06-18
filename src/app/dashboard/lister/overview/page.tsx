import React from "react";
import ListerOverviewPage from "./components/ListerOverviewPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "", // tentative
};

const page = () => {
  return <ListerOverviewPage />;
};

export default page;
