"use client";
import React from "react";
import useProcessSummaryContent from "./hooks/useProcessSummaryContent";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ProcessSummary } from "../types";
import { cn } from "@/lib/utils";

type Props = {};

const Sidebar = (props: Props) => {
  const processSummaryContent = useProcessSummaryContent();
  const [processSummary, setProcessSummary] =
    useLocalStorage<ProcessSummary>("process-summary");

  const handleMenuClick = (page: string) => {
    setProcessSummary({ ...processSummary, currentSummaryPage: page });
  };

  return (
    <section
      className="sticky top-28
     col-span-1 w-full bg-white lg:top-40 lg:h-screen lg:bg-transparent"
    >
      <ul className="flex w-full items-center gap-3 overflow-x-scroll lg:flex-col lg:items-start lg:overflow-x-auto">
        {processSummaryContent.map(
          (
            processPage, // mapping through processPage: i.e: Location, Contact Information
          ) => (
            <li
              key={processPage?.title}
              className={cn(
                "min-w-max flex-1 cursor-pointer rounded-md bg-white p-4 font-semibold lg:min-w-full",
                {
                  "border-l-3 border-l-accent-50 bg-[#E6EBEB]":
                    processPage?.title === processSummary?.currentSummaryPage,
                },
              )}
              onClick={() => handleMenuClick(processPage.title)}
            >
              {processPage?.title}
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Sidebar;
