import React from "react";
import AgentButtons from "./components/Button";
import { ClientOnly } from "@/components/ui/ClientOnly";
import BeMyAgentModal from "@/app/components/be-my-agent-form";
import styles from "./index.module.css";

const MyAgentLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <div
      className={`flex w-screen justify-center ${styles.be_my_agent_row}
    `}
    >
      <div className="flex w-full max-w-screen-3xl flex-col items-start justify-center bg-[#FEFEFE] p-7">
        <h2>Be My Agent</h2>
        <div className="flex w-full flex-col items-center gap-6 lg:w-fit lg:flex-row">
          <div className="flex w-full items-center justify-between gap-6 lg:justify-start">
            <p className="whitespace-nowrap text-[1.25rem]">Starting From</p>
            <AgentButtons variant="price" content="GHS 250.00" />
          </div>
          <ClientOnly>
            <BeMyAgentModal />
          </ClientOnly>{" "}
        </div>
      </div>
    </div>
    {children}
  </>
);

export default MyAgentLayout;
