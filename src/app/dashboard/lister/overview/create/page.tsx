"use client";
import React from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader/Loader";
const ListingModal = dynamic(() => import("../components/steps/ListingModal"));

const ListingCreatePage = () => {
  return (
    <main className="flex flex-col gap-40">
      <ListingModal />
      <Loader position="center" />
    </main>
  );
};

export default ListingCreatePage;
