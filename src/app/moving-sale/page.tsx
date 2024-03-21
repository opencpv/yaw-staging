import React from "react";
import MovingSalePage from "./pages/MovingSalePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moving Sale",
  description: "Moving Sale", // tentative
};

const page = () => {
  return <MovingSalePage />;
};

export default page;
