/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { BeMyAgentFormType, ProcessSummary } from "./types";
import styles from "./index.module.css";
import Sidebar from "./process-summary/Sidebar";
import SummaryArea from "./process-summary/SummaryArea";

type Props = {};

const ProcessSummary = React.forwardRef<HTMLInputElement, Props>(({}, ref) => {
  const [agentFormData, setAgentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");

  const [processSummary, setProcessSummary] =
    useLocalStorage<ProcessSummary>("process-summary");

  return (
    <section>
      <h1 className="mb-10 text-3xl font-bold">Summary</h1>
      {/* <h2 className={`${styles.title}`}>Review and Submit</h2> */}
      <div className="grid grid-cols-1 gap-y-20 gap-x-14 lg:grid-cols-3">
        <Sidebar />
        <SummaryArea />
      </div>
    </section>
  );
});

ProcessSummary.displayName = "ProcessSummary";

export default ProcessSummary;
