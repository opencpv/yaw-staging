import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ItemsPage = dynamic(
  () => import("../../components/shared/sell-products/pages/ItemsPage"),
);

export const metadata: Metadata = {
  title: "Moving Sale",
  description: "", // tentative
};

const page = () => {
  return <ItemsPage />;
};

export default page;
