import React from "react";
import RenterOverviewPage from "./components/RenterOverviewPage";
import { Metadata } from "next";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { BUBBLES_QUERY } from "@/lib/utils/sanity/queries";

export const metadata: Metadata = {
  title: "Overview",
  description: "", // tentative
};

const page = async () => {
  const initial = await loadQuery<SanityDocument[]>(BUBBLES_QUERY);
  const bubblesData = initial.data[0];

  return <RenterOverviewPage bubblesData={bubblesData} />;
};

export default page;
