import React from "react";
import MySearch from "../components/pages/MySearch";
import { Metadata } from "next";
import capitalizeName from "@/lib/utils/stringManipulation";

type Props = {
  params: { filter: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const filter = capitalizeName(params.filter.replaceAll("-", " "));

  return {
    title: filter === "All" ? "My Search" : filter,
    description: "", // tentative
  };
}

const page = ({ params }: Props) => {
  return <MySearch filter={params.filter} />;
};

export default page;
