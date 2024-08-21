import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ScrollTop = dynamic(() => import("@/components/__shared/ui/ScrollTop"));

export const metadata: Metadata = {
  title: "Overview",
  description: "", // tentative
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children} <ScrollTop />
    </>
  );
};

export default layout;
