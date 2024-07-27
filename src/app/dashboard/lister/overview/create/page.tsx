"use client";
import React from "react";
import dynamic from "next/dynamic";
const ListingModal = dynamic(() => import("../components/steps/ListingModal"));

const ListingCreatePage = () => {
  return <ListingModal />;
};

export default ListingCreatePage;
