import React, { createRef, useEffect, useRef } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { BeMyAgentFormType, ProcessSummary } from "./types";
import Sidebar from "./process-summary/Sidebar";
import SummaryArea from "./process-summary/SummaryArea";
import useProcessSummaryContent from "./process-summary/hooks/useProcessSummaryContent";

type Props = {};

const ProcessSummary = React.forwardRef<HTMLInputElement, Props>(({}, ref) => {
  const [agentFormData, setAgentFormData] = useLocalStorage<BeMyAgentFormType>(
    "agent-form",
    {
      priceRangeMinimum: "100",
      priceRangeMaximum: "100",
      bedMinimum: "1",
      bedMaximum: "1",
      bathroomMinimum: "1",
      bathroomMaximum: "1",
      leaseTermMinimum: "1",
      leaseTermMaximum: "1",
      paymentOption: "Rent Advance",
      title: "Mrs",
      dateOfBirth: "18-44",
      maritalStatus: "Single",
      tenants: "1-5",
      country: "Republic of Ghana",
      preferredMethodOfContact: "email",
      mostRecentEmployment: "Employed",
      employersCountry: "Republic of Ghana",
      monthlyIncome: "1000-2000",
    },
  )
  const [processSummary, setProcessSummary] =
    useLocalStorage<ProcessSummary>("process-summary");

  const processSummaryContent = useProcessSummaryContent();

  const processPagesRefs = useRef<React.MutableRefObject<HTMLLIElement>[]>([]); // array of refs to each process page

  useEffect(() => {
    // create refs for each process page
    processPagesRefs.current = processSummaryContent.map(
      (_, idx) => processPagesRefs.current[idx] || createRef(),
    );
  }, [processSummaryContent]);

  const handleMenuClick = (id: number, page: string) => {
    // scroll to the process page
    if (processPagesRefs.current[id]) {
      processPagesRefs.current[id].current.scrollIntoView({
        behavior: "smooth",
        block: window.innerWidth >= 1024 ? "start" : "center",
      });
    }
    setProcessSummary({ ...processSummary, currentSummaryPage: page });
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

ProcessSummary.displayName = "ProcessSummary";

export default ProcessSummary;
