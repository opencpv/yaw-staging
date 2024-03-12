"use client";
import React from "react";
import useStepsSummaryContent from "././hooks/useStepsSummaryContent";
import { cn } from "@/lib/utils";
import { beMyAgentStepsStore } from "@/store/dashboard/beMyAgentStepsStore";

type Props = {
  handleMenuClick: (id: number, page: string) => void;
};

const Sidebar = ({ handleMenuClick }: Props) => {
  const processSummaryContent = useStepsSummaryContent();
  const { selectedSummaryPage } = beMyAgentStepsStore();

  return (
    <section className="relative bottom-10 bg-white lg:h-screen lg:bg-transparent">
      <h1 className="mb-5 text-xl font-bold lg:mb-10 lg:text-3xl">Summary</h1>

      <ul className="hidden-scrollbar -ml-5 flex w-screen items-center gap-3 max-lg:overflow-x-scroll lg:-ml-0 lg:h-[28rem] lg:w-full lg:flex-col lg:items-start lg:overflow-x-auto lg:overflow-y-auto fhd:h-[35rem]">
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
                    processPage?.title === selectedSummaryPage,
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
