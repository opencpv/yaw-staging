import React from "react";
import ItemsPage from "../../components/shared/sell-products/pages/ItemsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moving Sale",
  description: "", // tentative
};

const page = () => {
  return <ItemsPage />;
};

export default page;
