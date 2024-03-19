import React, { createRef, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import SummaryArea from "./SummaryArea";
import useStepsSummaryContent from "./hooks/useStepsSummaryContent";
import { beMyAgentStepsStore } from "@/store/dashboard/beMyAgentStepsStore";

type Props = {};

const StepsSummary = React.forwardRef<HTMLInputElement, Props>(({}, ref) => {
  const processSummaryContent = useStepsSummaryContent();
  const { selectedSummaryPage, setSelectedSummaryPage } = beMyAgentStepsStore();

  const processPagesRefs = useRef<React.MutableRefObject<HTMLLIElement>[]>([]); // array of refs to each process page

  useEffect(() => {
    // create refs for each process page
    processPagesRefs.current = processSummaryContent.map(
      (_, idx) => processPagesRefs.current[idx] || createRef(),
    );
  }, [processSummaryContent]);

  useEffect(() => {
    // Ensures a summary page is set when it first renders
    if (!selectedSummaryPage) {
      setSelectedSummaryPage(processSummaryContent?.[0]?.title);
    }
  }, [selectedSummaryPage, processSummaryContent, setSelectedSummaryPage]);

  const handleMenuClick = (id: number, page: string) => {
    // scroll to the process page
    if (processPagesRefs.current[id]) {
      processPagesRefs?.current?.[id]?.current?.scrollIntoView({
        behavior: "smooth",
        block: window.innerWidth >= 1024 ? "start" : "center",
      });
    }
    setSelectedSummaryPage(page);
  };

  return (
    <section className="grid grid-cols-1 gap-x-20 lg:grid-cols-3">
      <div className="sticky top-8 z-10 mb-20 h-16 bg-white shadow-lg lg:top-10 lg:col-span-1 lg:mb-0 lg:h-32 lg:shadow-none">
        <Sidebar handleMenuClick={handleMenuClick} />
      </div>
      <div className="relative lg:top-10 lg:col-span-2 lg:mb-40">
        <SummaryArea processPagesRefs={processPagesRefs} />
      </div>
    </section>
  );
});

StepsSummary.displayName = "StepsSummary";

export default StepsSummary;
