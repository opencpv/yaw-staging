/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { BeMyAgentFormType } from "./types";
import styles from "./index.module.css";

type Props = {};

const ProcessSummary = React.forwardRef<HTMLInputElement, Props>(({}, ref) => {
  const [agentFormData, setAgentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");

  return (
    <section>
      <h1 className="text-3xl font-bold">Review and Submit</h1>
      {/* <h2 className={`${styles.title}`}>Review and Submit</h2> */}
    </section>
  );
});

ProcessSummary.displayName = "ProcessSummary";

export default ProcessSummary;
