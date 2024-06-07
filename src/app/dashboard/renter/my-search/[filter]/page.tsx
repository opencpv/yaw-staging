import React from "react";
import FilterPage from "../components/pages/FilterPage";
import { Metadata } from "next";
import capitalizeName from "@/lib/utils/stringManipulation";

type Props = {
  params: { filter: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const filter = capitalizeName(params.filter.replaceAll("-", " "));

  return {
    title: filter === "All" ? "My Search" : "filter",
    description: "", // tentative
  };
}

const page = ({ params }: Props) => {
  return <FilterPage filter={params.filter} />;
};

export default page;
