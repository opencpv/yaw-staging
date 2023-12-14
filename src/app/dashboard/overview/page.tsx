"use client"
import React from "react";
import RenterOverviewPage from "./components/overview/renter/RenterOverviewPage";
import PropManagerOverviewPage from "./components/overview/p-manager/PropManagerOverviewPage";

const tempCheck: "Renter" | "Property manager" = "Renter"; // TODO: implement appropriately

const page = () => {
  // check the type of switch
  return (
    <>
      {tempCheck === "Renter" ? (
        <PropManagerOverviewPage />
      ) : (
        <RenterOverviewPage />
      )}
    </>
  );
};

export default page;
