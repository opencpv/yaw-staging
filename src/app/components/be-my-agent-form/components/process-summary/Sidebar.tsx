"use client";
import React from "react";
import useProcessSummaryContent from "./hooks/useProcessSummaryContent";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ProcessSummary } from "../types";
import { cn } from "@/lib/utils";

type Props = {
  handleMenuClick: (id: number, page: string) => void;
};

const Sidebar = ({ handleMenuClick }: Props) => {
  const processSummaryContent = useProcessSummaryContent();
  const [processSummary, setProcessSummary] =
    useLocalStorage<ProcessSummary>("process-summary");

  // const handleMenuClick = (page: string) => {
  //   setProcessSummary({ ...processSummary, currentSummaryPage: page });
  // };

  return (
    <section className="relative bottom-10 bg-white lg:h-screen lg:bg-transparent">
      <h1 className="mb-5 text-xl font-bold lg:mb-10 lg:text-3xl">Summary</h1>

      <ul className="-ml-5 flex w-screen items-center gap-3 overflow-x-scroll lg:-ml-0 lg:w-full lg:flex-col lg:items-start lg:overflow-x-auto">
        {processSummaryContent.map(
          (
            processPage, // mapping through processPage: i.e: Location, Contact Information
            idx,
          ) => (
            <li
              key={processPage?.title}
              className={cn(
                "min-w-max flex-1 cursor-pointer rounded-md bg-white p-4 text-sm font-semibold sm:text-base lg:min-w-full",
                {
                  "border-l-3 border-l-accent-50 bg-[#E6EBEB] font-bold":
                    processPage?.title === processSummary?.currentSummaryPage,
                },
              )}
              onClick={() => handleMenuClick(idx, processPage?.title)}
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
