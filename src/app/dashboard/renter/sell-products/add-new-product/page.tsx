import React from "react";
import dynamic from "next/dynamic";
const AddItemPage = dynamic(
  () =>
    import("@/app/dashboard/components/shared/sell-products/pages/AddItemPage"),
);

const page = () => {
  return <AddItemPage />;
};

export default page;
