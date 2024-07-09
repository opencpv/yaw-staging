import React from "react";
import { Metadata } from "next";
import AgentLayout from "./components/pages/AgentLayout";

export const metadata: Metadata = {
  title: "My Agent",
  description: "", // tentative
};

const page = ({ children }: { children: React.ReactNode }) => {
  return <AgentLayout>{children}</AgentLayout>;
};

export default page;
