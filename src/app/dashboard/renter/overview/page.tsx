"use client";
import React from "react";
import RenterOverviewPage from "./components/RenterOverviewPage";
import PropManagerOverviewPage from "../../lister/overview/components/PropManagerOverviewPage";

const tempCheck: "Renter" | "Property manager" = "Renter"; // TODO: implement appropriately

const page = () => {
  // check the type of switch
  return (
    <>
      {tempCheck === "Renter" ? (
        <RenterOverviewPage />
      ) : (
        <PropManagerOverviewPage />
      )}
    </>
  );
};

export default page;
