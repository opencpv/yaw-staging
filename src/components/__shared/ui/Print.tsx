"use client";
import React from "react";
import { HiPrinter } from "react-icons/hi";

type Props = {};

const Print = (props: Props) => {
  return (
    <HiPrinter
      title="print"
      className="cursor-pointer"
      onClick={() => window.print()}
    />
  );
};

export default Print;
