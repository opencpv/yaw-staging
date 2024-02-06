import React from "react";
import AgentButtons from "./components/Button";
import { ClientOnly } from "@/components/ui/ClientOnly";
import BeMyAgentModal from "@/app/components/be-my-agent-form";
import styles from "./index.module.css";

const MyAgentLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <div
      className={`mt-12 flex w-full justify-center bg-[#FEFEFE] ${styles.be_my_agent_row}
    `}
    >
      <div className="flex w-full max-w-screen-3xl flex-col items-start justify-center overflow-x-hidden  p-7 pt-0">
        <h2 className="mb-4">Be My Agent</h2>
        <div className="flex w-full flex-col items-center gap-6 lg:w-fit lg:flex-row">
          <div className="flex w-full items-center justify-between gap-6 lg:justify-start">
            <p className="whitespace-nowrap text-[1.25rem]">Starting From</p>
            <AgentButtons
              variant="price"
              content="GHS 250.00"
              className="flex justify-end xs:block"
            />
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
